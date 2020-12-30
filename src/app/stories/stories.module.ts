import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoriesComponent } from './stories.component';
import { IonicModule } from '@ionic/angular';
import { DomainPipe } from '../pipes/domain.pipe';
import { TimeAgoPipe } from 'time-ago-pipe';

@Pipe({
  name: 'timeAgo',
  pure: false
})
export class TimeAgoExtendsPipe extends TimeAgoPipe implements PipeTransform { }

@NgModule({
  imports: [CommonModule, IonicModule],
  declarations: [StoriesComponent, DomainPipe, TimeAgoExtendsPipe],
  exports: [StoriesComponent]
})
export class StoriesComponentModule { }
