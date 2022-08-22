import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'tienda',
    loadChildren: () => import('./tienda/tienda.module').then( m => m.TiendaModule)
  },
  {
    path:'**',
    redirectTo:'tienda'
  }
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
