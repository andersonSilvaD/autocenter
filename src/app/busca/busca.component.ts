import { CarSearchForm } from '../models/CarSearchForm';
import { CarService } from './../services/car.service';
import { Component, OnInit } from '@angular/core';
import { Car } from '../models/Car';
import { Router } from '@angular/router';
import { Brand } from '../models/Brand';
import { HttpHeaders, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-busca',
  templateUrl: './busca.component.html',
  styleUrls: ['./busca.component.css']
})
export class BuscaComponent implements OnInit {


  marcasDisponiveis: Array<Brand> = new Array();
  modelosDisponiveis: Array<String> = new Array();
  formBusca: CarSearchForm = new CarSearchForm;
  carrosEncontrados: Array<Car> = new Array();

 constructor(private carroService: CarService, private router:Router) { }

 ngOnInit() {

   this.carroService.listaMarcas().subscribe(marcas => {
     this.marcasDisponiveis = marcas;
   }, err =>{
     console.log("Erro ao listar");
   })
   console.log("Devia setar as marcas" + this.marcasDisponiveis);
 }

 setModelos(brandName: string) {
    console.log("Setando modelos" + brandName);
    this.marcasDisponiveis.forEach(marca =>{
      if(marca.name == brandName)
         this.modelosDisponiveis = marca.modelList;
    })
    console.log(this.modelosDisponiveis);
 }

 search() {
  this.carroService.buscarPorParametros(this.formBusca).subscribe(carro => {
    console.log(carro); // se tirar isso, a busca so retorna resultado certo na segunda tentativa .... o_0
    this.carrosEncontrados = carro;
  }, err =>{
    console.log("Erro de busca");
  });
 // this.router.navigateByUrl('listaVeiculos');

 }

 detalhes(id:string) {
  let httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
    let httpParams = new HttpParams().set('id', id);

    this.router.navigate(['/detalhes'],{queryParams:{"id":id} });
     console.log("redirecionando")
 }
 remover(id:string) {
  this.carroService.remover(id).subscribe(carro =>{
  }, err => {
    console.log('Erro ao descartar', err)
  })
  location.reload();
 }

}
