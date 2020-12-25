import { MessageComponent } from './message.component';
import { MockBuilder, MockRender } from 'ng-mocks';
import { MessageComponentModule } from './message.module';

describe('MessageComponent', () => {
  beforeEach(() => MockBuilder(MessageComponent, MessageComponentModule));

  it('should create', () => {
    const component = MockRender(MessageComponent).point.componentInstance;
    expect(component).toBeTruthy();
  });
});
