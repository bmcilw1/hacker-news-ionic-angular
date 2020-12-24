import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StoriesComponent } from './stories.component';
import { MockBuilder, MockRender } from 'ng-mocks';
import { StoriesService } from '../services/stories/stories.service';

describe('StoriesComponent', () => {
  let component: StoriesComponent;
  let fixture: ComponentFixture<StoriesComponent>;

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
