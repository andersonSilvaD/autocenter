import { CarSearchForm } from '../models/CarSearchForm';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/Car';
//lembrar de deixar o codigo "mais limpo" antes de mandar
//impossivel de limpar, cada linha modificada é um erro diferente do angular... =/
@Injectable({
  providedIn: 'root'
})
export class CarService {

  private url = 'http://localhost:8080/veiculos/';

  constructor(private http: HttpClient) { }

  detalhes(id: string): Observable<any> {
    let httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
    let httpParams = new HttpParams().set('id', id);

  return this.http.get('http://localhost:8080/veiculos/buscaporid',{
      headers: httpHeaders,
      params: httpParams,
      responseType: 'json',
  });
  }
  remover(id: any) {
    console.log("Apagndo " + this.url.concat(id))
    return this.http.delete(this.url.concat(id));
  }

  atualizar(car: Car): void {
    console.log('http://localhost:8080/veiculos/'.concat(car.id));
    this.http.put('http://localhost:8080/veiculos/'.concat(car.id),{'yearOfFabrication': car.yearOfFabrication,
  'color': car.color,
  'price': car.price}).subscribe();
  }

  cadastrarCarro(carro: Car): Observable<any> {
    console.log("Cadastrando " + carro);
    return this.http.post(this.url, carro);
  }

  listarCarros(): Observable<any>{
    return this.http.get(this.url);
  }

  listaMarcas(): Observable<any> {
    return this.http.get('http://localhost:8080/brand')
  }

  buscarPorParametros(formBusca: CarSearchForm): Observable<any> {

   let httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');

   let httpParams = new HttpParams()
                        .set('brand', formBusca.brand)
                        .set('model', formBusca.model)
                        .set('yearOfFabrication', formBusca.yearOfFabrication)
                        .set('color', formBusca.color);

    return this.http.get('http://localhost:8080/veiculos/busca', {
      headers: httpHeaders,
      params: httpParams,
      responseType: 'json',
} );
  }
}
