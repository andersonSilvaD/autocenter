import { CarService } from './../services/car.service';
import { Component, OnInit } from '@angular/core';
import { Car } from '../models/Car';
import { Router } from '@angular/router';
import { HttpHeaders, HttpParams } from '@angular/common/http';


@Component({
  selector: 'app-car-component',
  templateUrl: './car-component.component.html',
  styleUrls: ['./car-component.component.css']
})
export class CarComponentComponent implements OnInit {



  carros: Array<any> = new Array();
  carro: Car = new Car();
  router: Router;

  constructor(private carroService: CarService, router: Router) {this.router = router }

  ngOnInit() {
    this.listarCarros();
  }

  remover(id: string) {
    this.carroService.remover(id).subscribe(carro =>{
      this.carro = new Car();
    }, err => {
      console.log('Erro ao descartar', err)
    })
    location.reload();
  }
  detalhes(id:string) {
    let httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
    let httpParams = new HttpParams().set('id', id);

    this.router.navigate(['/detalhes'],{queryParams:{"id":id} });

    console.log("redirecionando")
    }
  listarCarros(){
    this.carroService.listarCarros().subscribe(carros => {
      this.carros = carros;
    }, err =>{
      console.log("Erro ao listar");
    })
  }

}
