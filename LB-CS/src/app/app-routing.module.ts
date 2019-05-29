import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BreweryComponent } from './brewery/brewery.component';
import { DistilleryComponent } from './distillery/distillery.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: '', redirectTo: '/about', pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'brewery', component: BreweryComponent },
  { path: 'distill', component: DistilleryComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**',   redirectTo: '/about', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
