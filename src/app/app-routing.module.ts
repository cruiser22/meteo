import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MeteojourComponent } from './src/pages/meteojour/meteojour/meteojour.component';
import { MeteojourdetailComponent } from './src/pages/meteojourdetail/meteojourdetail/meteojourdetail.component';
import { MeteoseptjourComponent } from './src/pages/meteoseptjour/meteoseptjour/meteoseptjour.component';

const routes: Routes = [
  {
    path:'meteojour',
    component: MeteojourComponent
  },

  {
    path:'meteojourdetail',
    component: MeteojourdetailComponent
  },

  {
    path:'meteoseptjour',
    component: MeteoseptjourComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
