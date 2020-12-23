import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoriesComponent } from './stories.component';



@NgModule({
  imports: [CommonModule],
  declarations: [StoriesComponent],
  exports: [StoriesComponent]
})
export class StoriesComponentModule { }
