import { DetalheIndividualComponent } from './detalheIndividual/detalheIndividual.component';

import { BuscaComponent } from './busca/busca.component';
import { CarFormComponent } from './car-form/car-form.component';
import { CarComponentComponent } from './car-component/car-component.component';
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { Routes } from '@angular/router';

export const routes: Routes = [
  {path: '', redirectTo: 'listaVeiculos', pathMatch: 'full'},
  {path: 'listaVeiculos', component: CarComponentComponent},
  {path: 'cadastro-veiculo', component: CarFormComponent},
  {path: 'busca', component: BuscaComponent},
  {path: 'detalhes', component: DetalheIndividualComponent}
]

@NgModule( {
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
}
  )

export class AppRoutingModule {

}
