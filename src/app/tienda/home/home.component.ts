import { Component, OnInit } from '@angular/core';
import { HttpDataService } from '../service/http-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  productos: any[] = [];

  constructor(private serviceApi: HttpDataService) { }

  ngOnInit(): void { 
    this.serviceApi
      .getProductos()
      .subscribe(data => {
        console.log(data);
        this.productos = data
      });
  }
}
