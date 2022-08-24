import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'

import { TiendaRoutingModule } from './tienda-routing.module';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { HttpDataService } from './service/http-data.service';


@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent
  ],
  imports: [
    CommonModule, 
    TiendaRoutingModule,
    HttpClientModule
  ],
  providers:[HttpDataService]
})

export class TiendaModule { }
