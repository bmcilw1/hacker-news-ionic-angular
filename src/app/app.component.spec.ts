import { AppComponent } from './app.component';
import { MockBuilder, MockInstance, MockRender, MockReset } from 'ng-mocks';
import { AppModule } from './app.module';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

describe('AppComponent', () => {
  const platformReady = Promise.resolve();

  beforeEach(() =>
    MockBuilder(AppComponent, AppModule)
      .mock(Platform, {
        ready: () => platformReady
      } as unknown as Platform)
  );

  afterEach(MockReset);

  it('should create the app', () => {
    const component = MockRender(AppComponent).point.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should initialize the app', async () => {
    const hide = jasmine.createSpy('hideSpy');
    const styleDefault = jasmine.createSpy('styleDefaultSpy');

    MockInstance(StatusBar, () => ({
      styleDefault
    }));

    MockInstance(SplashScreen, () => ({
      hide
    }));

    const fixture = MockRender(AppComponent);
    await platformReady;

    expect(styleDefault).toHaveBeenCalled();
    expect(hide).toHaveBeenCalled();
  });
});
