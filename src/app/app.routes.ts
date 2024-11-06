import { Routes } from '@angular/router';
import {NavbarComponent} from './navbar/navbar.component';
import {FirstPageComponent} from './first-page/first-page.component';
import {SecondPageComponent} from './second-page/second-page.component';
import {ThirdPageComponent} from './third-page/third-page.component';
import {FourthPageComponent} from './fourth-page/fourth-page.component';
import {AppComponent} from './app.component';

export const routes: Routes = [
  // {path:'',redirectTo:'app',pathMatch:'full'},
  // {path:'app', component:AppComponent,},
  {path:'navbar',component:NavbarComponent},
  {path:'first-page',component:FirstPageComponent},
  {path:'second-page',component:SecondPageComponent},
  {path:'third-page',component:ThirdPageComponent},
  {path:'fourth-page',component:FourthPageComponent},
];
