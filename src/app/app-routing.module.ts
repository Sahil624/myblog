import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './_components/landing-page/landing-page.component';
import { AboutComponent } from './_components/about/about.component';

const routes: Routes = [
    {
      path: '',
      component: LandingPageComponent 
    },
    {
      path: 'about',
      component: AboutComponent
    }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
