import { MockBuilder, MockInstance, MockRender, MockReset } from 'ng-mocks';
import { EMPTY, Subject } from 'rxjs';
import { Item } from '../models/item.type';

import { StoriesService } from '../services/stories.service';

import { StoriesComponent } from './stories.component';
import { StoriesComponentModule } from './stories.module';

describe('StoriesComponent', () => {
  let topStories$: Subject<Array<Item>>;

  beforeEach(() => {
    topStories$ = new Subject();

    return MockBuilder(StoriesComponent, StoriesComponentModule)
      .mock(StoriesService, {
        getTopStories$: () => topStories$,
      });
  });

  afterEach(MockReset);

  it('should create', () => {
    const component = MockRender(StoriesComponent).point.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should call storiesService.getTopStories$ once on init', () => {
    const getTopStories$ = jasmine.createSpy('getTopStories$Spy').and.returnValue(EMPTY);
    MockInstance(StoriesService, () => ({
      getTopStories$,
    }));
    const fixture = MockRender(StoriesComponent);

    expect(getTopStories$).toHaveBeenCalledTimes(1);
  });

  it('should set stories returned from storiesService.getTopStories$', () => {
    const items = [{ id: 1 } as Item];
    const fixture = MockRender(StoriesComponent);
    const component = fixture.point.componentInstance;

    topStories$.next(items);
    fixture.detectChanges();

    expect(component.stories).toEqual(items);
  });
});
