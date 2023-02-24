import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {LinkCreateComponent} from "./components/link-create/link-create.component";

const routes: Routes = [
  {
    path:'', pathMatch:'full', redirectTo:'/home'
  },{
    path:'home',component: HomeComponent
  },{
    path:'create',component: LinkCreateComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
