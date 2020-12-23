import { Component, OnInit } from '@angular/core';
import { Item } from '../models/item.type';
import { StoriesService } from '../services/stories/stories.service';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss'],
})
export class StoriesComponent implements OnInit {
  stories: Array<Item>;

  constructor(private storiesService: StoriesService) { }

  ngOnInit() {
    this.storiesService.getTopStories$().subscribe(stories => this.stories = stories);
  }

}
