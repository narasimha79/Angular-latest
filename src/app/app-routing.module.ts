import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HerolistComponent } from './herolist/herolist.component';
import { HerodetailsComponent } from './herodetails/herodetails.component';


const routes: Routes = [
  { path: '', component: HerolistComponent, pathMatch: 'full' },
  {path:'heroes', component:HerolistComponent},
  {path:'heroes/:id', component:HerodetailsComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
