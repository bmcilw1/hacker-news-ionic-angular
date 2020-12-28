import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoriesComponent } from './stories.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  imports: [CommonModule, IonicModule],
  declarations: [StoriesComponent],
  exports: [StoriesComponent]
})
export class StoriesComponentModule { }
