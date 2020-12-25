import { ViewMessagePageRoutingModule } from './view-message-routing.module';
import { ViewMessagePage } from './view-message.page';
import { MockBuilder, MockRender } from 'ng-mocks';
import { ActivatedRoute, ActivatedRouteSnapshot, convertToParamMap } from '@angular/router';
import { IonicModule } from '@ionic/angular';

describe('ViewMessagePage', () => {
  beforeEach(() => MockBuilder(ViewMessagePage)
    .mock(IonicModule)
    .mock(ActivatedRoute, {
      snapshot: { paramMap: convertToParamMap({ id: '1' }) } as ActivatedRouteSnapshot
    }));

  it('should create', () => {
    const component = MockRender(ViewMessagePage).point.componentInstance;
    expect(component).toBeTruthy();
  });
});
