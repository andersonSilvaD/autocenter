import { DetalheIndividualComponent } from './detalheIndividual/detalheIndividual.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CarComponentComponent } from './car-component/car-component.component';

import { CarService } from './services/car.service';
import {HttpClientModule} from '@angular/common/http'
import { CarFormComponent } from './car-form/car-form.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BuscaComponent } from './busca/busca.component';
import { NgxMaskModule } from 'ngx-mask';

@NgModule({
  declarations: [
      AppComponent,
      CarComponentComponent,
      CarFormComponent,
      BuscaComponent,
      DetalheIndividualComponent,
   ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    NgxMaskModule.forRoot({
      dropSpecialCharacters:false
    })
  ],
  providers: [CarService,HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
