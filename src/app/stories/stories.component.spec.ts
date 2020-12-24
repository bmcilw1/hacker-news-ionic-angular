import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StoriesComponent } from './stories.component';
import { MockBuilder, MockRender } from 'ng-mocks';
import { StoriesService } from '../services/stories/stories.service';

describe('StoriesComponent', () => {
  let component: StoriesComponent;
  let fixture: ComponentFixture<StoriesComponent>;

  // TODO: go back to pure angular tests using hand-configured Jasmine spies and the default Angular TestBed.

  beforeEach(async(() => {
    MockBuilder(StoriesComponent);

    fixture = MockRender(StoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
