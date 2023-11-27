import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PersonalComponent } from './personal/personal.component';
import { OfficialComponent } from './official/official.component';

const routes: Routes = [


{
  path:'',component:PersonalComponent
},
{
  path:'Official-details',component:OfficialComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
