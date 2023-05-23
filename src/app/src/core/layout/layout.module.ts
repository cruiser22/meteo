import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { SlidebarComponent } from './slidebar/slidebar.component';



@NgModule({
  declarations: [
    FooterComponent,
    SlidebarComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LayoutModule { }
