import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { StoriesService } from './stories.service';
import { Item } from '../models/item.type';

describe('StoriesService', () => {
  let service: StoriesService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [StoriesService]
    });
    service = TestBed.inject(StoriesService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    // After every test, assert that there are no more pending requests.
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should define getTopStories$', () => {
    expect(service.getTopStories$).toBeDefined();
  });

  it('should return top 1 story when called with 1', done => {
    const items = [{
      id: 11010
    } as Item];
    const n = 1;

    service.getTopStories$(n).subscribe(
      stories => {
        expect(stories).toEqual(items);
        done();
      }
    );

    const reqTopStories = httpMock.expectOne(`${service.topStoriesUrl + service.jsonUrlSpecifier}?${service.limitToFirstUrlSpecifier + n}`);
    reqTopStories.flush(items.map(i => i.id));

    const reqIdToItem = httpMock.expectOne(`${service.itemUrl}/${items[0].id + service.jsonUrlSpecifier}`);
    reqIdToItem.flush(items[0]);
  });

  it('should map ids to stories correctly when multiple items requested', done => {
    const items = [{
      id: 11010
    } as Item,
    {
      id: 10002
    } as Item];
    const n = 2;

    service.getTopStories$(n).subscribe(
      stories => {
        expect(stories).toEqual(items);
        done();
      }
    );

    const reqTopStories = httpMock.expectOne(`${service.topStoriesUrl + service.jsonUrlSpecifier}?${service.limitToFirstUrlSpecifier + n}`);
    reqTopStories.flush(items.map(i => i.id));

    items.forEach(item => {
      const reqIdToItem = httpMock.expectOne(`${service.itemUrl}/${item.id + service.jsonUrlSpecifier}`);
      reqIdToItem.flush(item);
    });
  });

  it('should correctly set headers and urls', () => {
    const items = [{
      id: 11010
    } as Item,
    {
      id: 10002
    } as Item];
    const n = 2;

    service.getTopStories$(n).subscribe();

    const reqTopStories = httpMock.expectOne(`${service.topStoriesUrl + service.jsonUrlSpecifier}?${service.limitToFirstUrlSpecifier + n}`);
    expect(reqTopStories.request.method).toBe("GET");
    reqTopStories.flush(items.map(i => i.id));

    items.forEach(item => {
      const reqIdToItem = httpMock.expectOne(`${service.itemUrl}/${item.id + service.jsonUrlSpecifier}`);
      expect(reqIdToItem.request.method).toBe("GET");
      reqIdToItem.flush(item);
    });
  });
});
