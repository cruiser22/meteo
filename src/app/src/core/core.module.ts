import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {FooterComponent} from 'src/app/src/core/layout/footer/footer.component'
import { SlidebarComponent } from './layout/slidebar/slidebar.component'

import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    SlidebarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    SlidebarComponent,
    FooterComponent
  ]
})
export class CoreModule { }
