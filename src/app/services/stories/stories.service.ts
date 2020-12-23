import { Injectable } from '@angular/core';
import { Item } from 'src/app/models/item.type';
import { Observable, forkJoin } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { map, retry, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StoriesService {
  baseUrl: string;

  constructor() {
    this.baseUrl = 'https://hacker-news.firebaseio.com/v0';
  }

  private getTopStoryIds$(limitTopNStories: number): Observable<Array<number>> {
    var url = `${this.baseUrl}/topstories.json?orderBy="$key"&limitToFirst=${limitTopNStories}`;
    return ajax.getJSON(url)
      .pipe(
        retry(2),
        map(response => response as Array<number>)
      );
  }

  private mapItemIdToItem$(itemId: number): Observable<Item> {
    var url = `${this.baseUrl}/item/${itemId}.json`;
    return ajax.getJSON(url)
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
