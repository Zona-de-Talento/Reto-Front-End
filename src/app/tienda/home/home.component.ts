import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
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

  confirmarCompra(): void {
    Swal.fire({
      title: 'Confirmar?',
      text: "Estas usted seguro que quiere realizar la compra?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, estoy seguro'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Felicitaciones!',
          'Su oren a sido realizada.',
          'success'
        )
      }
    })
  }
}
