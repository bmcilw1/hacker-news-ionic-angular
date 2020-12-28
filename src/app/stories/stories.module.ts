import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoriesComponent } from './stories.component';
import { IonicModule } from '@ionic/angular';
import { DomainPipe } from '../pipes/domain.pipe';
import { TimeAgoPipe } from 'time-ago-pipe';


@NgModule({
  imports: [CommonModule, IonicModule],
  declarations: [StoriesComponent, DomainPipe, TimeAgoPipe],
  exports: [StoriesComponent]
})
export class StoriesComponentModule { }
