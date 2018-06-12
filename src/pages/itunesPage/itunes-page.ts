import { Component } from '@angular/core';
import { ItunesService } from '../../app/busquedaItunes.service';
import { CancionModelResultado } from '../../app/cancion.model';
import { Observable } from 'rxjs/Observable';
import { ItunesModelResultado } from '../../app/resultado.model';

@Component({
  selector: 'itunes-page',
  templateUrl: 'itunes-page.html',
  providers: [ItunesService]
})
export class ItunesComponent {
  busqueda : string;
  arrayCanciones : this.arrayCanciones[];
  constructor(public ItunesServiceVariable : ItunesService) {
    console.log ("la pagina de itunes se va a cargar")
    this.busqueda = "valor inicial";
    console.log("constructor busqueda", this.busqueda);
  }

  buscar (){
    console.log("buscar"+this.busqueda);
    let resultado : Observable<ItunesModelResultado> = this.ItunesServiceVariable.buscar(this.busqueda);
    resultado.subscribe(jsoncanciones =>this.procesarCanciones(jsoncanciones));
  }

  procesarCanciones (jsoncanciones : any){
    let infocanciones : ItunesModelResultado = <ItunesModelResultado> jsoncanciones;
    arrayCanciones = this.arrayCanciones : CancionModelResultado[] = infocanciones.results;
    console.log(arrayCanciones[0].artistName);
  }
}

