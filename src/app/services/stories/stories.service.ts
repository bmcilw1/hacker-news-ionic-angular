import { Inject, Injectable } from '@angular/core';
import { Item } from 'src/app/models/item.type';
import { Observable, forkJoin } from 'rxjs';
import { map, retry, switchMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StoriesService {
  public BASE_URL = `https://hacker-news.firebaseio.com/v0`;

  constructor(private httpClient: HttpClient) { }

  private getTopStoryIds$(limitTopNStories: number): Observable<Array<number>> {
    var url = `${this.BASE_URL}/topstories.json?orderBy="$key"&limitToFirst=${limitTopNStories}`;
    return this.httpClient.get(url)
      .pipe(
        retry(2),
        map(response => response as Array<number>)
      );
  }

  private mapItemIdToItem$(itemId: number): Observable<Item> {
    var url = `${this.BASE_URL}/item/${itemId}.json`;
    return this.httpClient.get(url)
      .pipe(
        retry(2),
        map(response => response as Item)
      );
  }

  public getTopStories$(limitTopNStories: number): Observable<Array<Item>> {
    return this.getTopStoryIds$(limitTopNStories).pipe(
      switchMap(ids =>
        forkJoin(
          ids.map(id => this.mapItemIdToItem$(id))
        )
      )
    );
  }
}
