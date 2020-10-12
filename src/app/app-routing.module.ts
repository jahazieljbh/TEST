import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MapComponent } from './map/map.component';
import { LandingPageComponent } from './landing-page/landing-page.component';



const rutas: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/landing-page'},
  {path: 'landing-page', component: LandingPageComponent},
  {path: 'mapa', component: MapComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(rutas)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
