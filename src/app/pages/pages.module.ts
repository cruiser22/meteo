import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeteojourComponent } from './meteojour/meteojour/meteojour.component';
import { MeteojourdetailComponent } from './meteojourdetail/meteojourdetail/meteojourdetail.component';
import { MeteoseptjourComponent } from './meteoseptjour/meteoseptjour/meteoseptjour.component';




@NgModule({
  declarations: [
    MeteojourComponent,
    MeteojourdetailComponent,
    MeteoseptjourComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
