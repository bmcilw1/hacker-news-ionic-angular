import { HomePage } from './home.page';
import { HomePageModule } from './home.module';
import { MockBuilder, MockRender } from 'ng-mocks';

describe('HomePage', () => {
  beforeEach(() => MockBuilder(HomePage, HomePageModule));

  it('should create', () => {
    const component = MockRender(HomePage).point.componentInstance;
    expect(component).toBeTruthy();
  });
});
