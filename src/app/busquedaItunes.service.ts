import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ItunesModelResultado } from "./resultado.model";
import { Observable } from "rxjs/Observable";

@Injectable()
export class ItunesService {
    
    constructor(public http: HttpClient){
        //necesitamos usar el http para consumir la app. se lo ponemos al constructor. 
        
    }
//buscar variable tipo
// what do you have to do? function - What do you need? parameters - What type you need? variable type
    buscar (busqueda : string): Observable<ItunesModelResultado> {
        let resultado : Observable<ItunesModelResultado>;
        //ItunesModelResult es un modelo de respuesta basado en el json
        resultado = this.http.get<ItunesModelResultado>( "https://itunes.apple.com/search?&media=music&limit=20&term=")
        return resultado;
    }
}