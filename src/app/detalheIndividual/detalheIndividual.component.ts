import { HttpHeaders, HttpParams } from '@angular/common/http';
import { CarService } from '../services/car.service';
import { Component, OnInit } from '@angular/core';
import { Car } from '../models/Car';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detalheIndividual',
  templateUrl: './detalheIndividual.component.html',
  styleUrls: ['./detalheIndividual.component.css']
})
export class DetalheIndividualComponent implements OnInit {
  carro: Car = new Car();
  carroService: CarService;
  router: Router

  constructor(carroService: CarService, private route: ActivatedRoute,router: Router) {
    this.carroService = carroService
    this.router = router
  }

  ngOnInit() {
    this.route.queryParams.subscribe(param =>{
      this.carroService.detalhes(param.id).subscribe(carro=>{
        console.log(carro);
        this.carro = carro;
      });
    })
    console.log(this.carro);
  }

  detalhes(id:string) {
    let httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
    let httpParams = new HttpParams().set('id', id);

    this.router.navigate(['/detalhes'],{queryParams:{"id":id} });

    console.log("redirecionando")
  }

  gerarFormInfo() {
    console.log("Gerando formulario de edição");
  }
  confirm() {
    console.log("atualizando");
    console.log(this.carro);
    this.carroService.atualizar(this.carro);
    this.router.navigateByUrl('listaVeiculos');

  }


}
