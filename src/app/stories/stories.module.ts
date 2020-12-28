import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoriesComponent } from './stories.component';
import { IonicModule } from '@ionic/angular';
import { DomainPipe } from '../pipes/domain.pipe';



@NgModule({
  imports: [CommonModule, IonicModule],
  declarations: [StoriesComponent, DomainPipe],
  exports: [StoriesComponent]
})
export class StoriesComponentModule { }
