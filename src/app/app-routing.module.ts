import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MeteojourComponent } from './pages/meteojour/meteojour/meteojour.component';
import { MeteojourdetailComponent } from './pages/meteojourdetail/meteojourdetail/meteojourdetail.component';
import { MeteoseptjourComponent } from './pages/meteoseptjour/meteoseptjour/meteoseptjour.component';

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
