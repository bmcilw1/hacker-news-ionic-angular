import { Injectable } from '@angular/core';
import { Item } from 'src/app/models/item.type';
import { Observable, forkJoin } from 'rxjs';
import { retry, switchMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StoriesService {
  public baseUrl: string = `https://hacker-news.firebaseio.com/v0`;
  public topStoriesUrl: string = `${this.baseUrl}/topstories`;
  public itemUrl: string = `${this.baseUrl}/item`;
  public jsonUrlSpecifier: string = `.json`;
  public limitToFirstUrlSpecifier: string = `orderBy="$key"&limitToFirst=`;

  constructor(private httpClient: HttpClient) { }

  private getTopStoryIds$(limitTopNStories: number = 10): Observable<Array<number>> {
    const url = `${this.topStoriesUrl}${this.jsonUrlSpecifier}?
      ${this.limitToFirstUrlSpecifier}${limitTopNStories}`;
    return this.httpClient.get<Array<number>>(url).pipe(retry(2));
  }

  public getItemById$(itemId: number): Observable<Item> {
    const url = `${this.itemUrl}/${itemId}${this.jsonUrlSpecifier}`;
    return this.httpClient.get<Item>(url).pipe(retry(2));
  }

  public getTopStories$(limitTopNStories: number = 10): Observable<Array<Item>> {
    return this.getTopStoryIds$(limitTopNStories).pipe(
      switchMap(ids =>
        forkJoin(
          ids.map(id => this.getItemById$(id))
        )
      )
    );
  }
}
