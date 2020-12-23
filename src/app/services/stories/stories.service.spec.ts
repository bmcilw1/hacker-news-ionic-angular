import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { StoriesService } from './stories.service';
import { Item } from 'src/app/models/item.type';

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

    const reqTopStories = httpMock.expectOne(`${service.baseUrl}/topstories?orderBy="$key"&limitToFirst=${n}`);
    expect(reqTopStories.request.method).toBe("GET");
    expect(reqTopStories.request.headers.get("Content-Type")).toBe("application/json");
    reqTopStories.flush(items.map(i => i.id));

    const reqIdToItem = httpMock.expectOne(`${service.baseUrl}/item/${items[0].id}`);
    expect(reqIdToItem.request.method).toBe("GET");
    expect(reqIdToItem.request.headers.get("Content-Type")).toBe("application/json");
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

    const reqTopStories = httpMock.expectOne(`${service.baseUrl}/topstories?orderBy="$key"&limitToFirst=${n}`);
    expect(reqTopStories.request.method).toBe("GET");
    expect(reqTopStories.request.headers.get("Content-Type")).toBe("application/json");
    reqTopStories.flush(items.map(i => i.id));

    items.forEach(item => {
      const reqIdToItem = httpMock.expectOne(`${service.baseUrl}/item/${item.id}`);
      expect(reqIdToItem.request.method).toBe("GET");
      expect(reqIdToItem.request.headers.get("Content-Type")).toBe("application/json");
      reqIdToItem.flush(item);
    });
  });
});
