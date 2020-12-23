import { Injectable } from '@angular/core';
import { Item } from 'src/app/models/item.type';
import { Observable, forkJoin } from 'rxjs';
import { retry, switchMap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StoriesService {
  public baseUrl: string = `https://hacker-news.firebaseio.com/v0`;
  public topStoriesUrl: string = `${this.baseUrl}/topstories`;
  public itemUrl: string = `${this.baseUrl}/item`;
  public limitToFirstUrlSpecifier: string = `orderBy="$key"&limitToFirst=`;

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private httpClient: HttpClient) { }

  private getTopStoryIds$(limitTopNStories: number): Observable<Array<number>> {
    const url = `${this.topStoriesUrl}?${limitTopNStories > 0 ? this.limitToFirstUrlSpecifier + limitTopNStories : ''}`;
    return this.httpClient.get<Array<number>>(url, this.httpOptions).pipe(retry(2));
  }

  public getItemById$(itemId: number): Observable<Item> {
    const url = `${this.itemUrl}/${itemId}`;
    return this.httpClient.get<Item>(url, this.httpOptions).pipe(retry(2));
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
