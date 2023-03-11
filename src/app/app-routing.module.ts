import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./Pages/home/home.component";
import {AboutComponent} from "./Pages/about/about.component";
import {ContactComponent} from "./Pages/contact/contact.component";



const routes: Routes = [
  { path: '', component: HomeComponent, data: { animation: 'openClosePage' }  },
  { path: 'about', component: AboutComponent  },
  { path: 'contact', component: ContactComponent  },
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]

})
export class AppRoutingModule { }
