import { MockBuilder, MockRender } from 'ng-mocks';
import { EMPTY } from 'rxjs';

import { StoriesService } from '../services/stories/stories.service';

import { StoriesComponent } from './stories.component';
import { StoriesComponentModule } from './stories.module';

describe('StoriesComponent', () => {
  beforeEach(() => MockBuilder(StoriesComponent, StoriesComponentModule)
    .mock(StoriesService, {
      getTopStories$: () => EMPTY,
    })
  );

  it('should create', () => {
    const component = MockRender(StoriesComponent).point.componentInstance;
    expect(component).toBeTruthy();
  });
});