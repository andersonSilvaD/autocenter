import { CarService } from '../services/car.service';
import { Component, OnInit } from '@angular/core';
import { Car } from '../models/Car';
import { Router } from '@angular/router';
import { Brand } from '../models/Brand';

@Component({
  selector: 'app-car-form',
  templateUrl: './car-form.component.html',
  styleUrls: ['./car-form.component.css']
})
export class CarFormComponent implements OnInit {

   marcasDisponiveis: Array<Brand> = new Array();
   modelosDisponiveis: Array<String> = new Array();
   carro: Car = new Car();

  constructor(private carroService: CarService, private router:Router) { }

  ngOnInit() {

    this.carroService.listaMarcas().subscribe(marcas => {
      this.marcasDisponiveis = marcas;
    }, err =>{
      console.log("Erro ao listar");
    })
   // this.modelosDisponiveis = this.marcasDisponiveis[0].modelList;
  }

  setModelos(brandName: string) {
     console.log("Setando modelos" + brandName);

     this.marcasDisponiveis.forEach(marca =>{
       if(marca.name == brandName)
          this.modelosDisponiveis = marca.modelList;
     })
     console.log(this.modelosDisponiveis);
  }
  confirm() {

    this.carroService.cadastrarCarro(this.carro).subscribe(carro => {}, err =>{
      console.log("Erro de cadastro: " + "Os campos são obrigatorios");
    });
    console.log("Car form-cadastro" + this.carro);
    this.router.navigateByUrl('listaVeiculos');

    console.log(this.carro);
    this.router.navigateByUrl('/listaVeiculos');
  }
}
