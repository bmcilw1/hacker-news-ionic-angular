import { Injectable } from '@angular/core';
import { Item } from 'src/app/models/item.type';

@Injectable({
  providedIn: 'root'
})
export class StoriesService {
  getTopStories(): Array<Item> {
    return [];
  }

  constructor() { }
}
