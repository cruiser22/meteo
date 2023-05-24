import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeteoseptjourComponent } from './meteoseptjour/meteoseptjour/meteoseptjour.component';
import { MeteojourdetailComponent } from './meteojourdetail/meteojourdetail/meteojourdetail.component';
import { MeteojourComponent } from './meteojour/meteojour/meteojour.component';



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
