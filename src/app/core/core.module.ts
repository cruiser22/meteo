import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {FooterComponent} from 'src/app/core/layout/footer/footer.component'


import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    
    FooterComponent
  ]
})
export class CoreModule { }
