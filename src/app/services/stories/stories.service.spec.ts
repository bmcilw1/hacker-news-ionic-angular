import { TestBed } from '@angular/core/testing';
import { TestScheduler } from 'rxjs/testing';

import { StoriesService } from './stories.service';

describe('StoriesService', () => {
  let service: StoriesService;
  let scheduler: TestScheduler;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StoriesService);
    scheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should define getTopStories$', () => {
    expect(service.getTopStories$).toBeDefined();
  });

  it('should return top 1 story when called with 1', done => {
    service.getTopStories$(1).subscribe(
      stories => {
        expect(stories.length).toEqual(1);
        done();
      }
    );
  });
});
