import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Item } from '../models/item.type';
import { StoriesService } from '../services/stories.service';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss'],
})
export class StoriesComponent implements OnInit {
  stories: Array<Item>;
  topStoriesSubscription: Subscription;

  constructor(private storiesService: StoriesService) { }

  ngOnInit() {
    this.topStoriesSubscription = this.storiesService.getTopStories$().subscribe(stories => this.stories = stories);
  }

  ngOnDestroy() {
    this.topStoriesSubscription.unsubscribe();
  }

}