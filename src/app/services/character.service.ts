import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  private apiUrl = environment.apiConfig.apiUrl;
  private token = environment.apiConfig.token;
  private endPoint = environment.apiConfig.endPoint;

  constructor(
   private http: HttpClient
  ) { 
    
  }

  /**
 * @function getCharacters
 * @description Llamar a la API para obtener una lista de personajes utilizando el servicio HTTP.
 *              Construye la URL de la API utilizando los parámetros de configuración y el nombre del personaje.
 * @param {string} personaje - El nombre del personaje a buscar.
 * @returns {Observable<any>} - Un observable que emite la respuesta de la API.
 */
  getCharacters(personaje: string):Observable<any>{
    const url = `https://quixotic-ong-edgardo90.koyeb.app/api/superhero/search/${personaje}`;
    return this.http.get<any>(url);
  }


  /**
 * @function getCharacterById
 * @description Llamar a la API para obtener los detalles de un personaje por su ID utilizando el servicio HTTP.
 *              Construye la URL de la API utilizando los parámetros de configuración y el ID del personaje.
 * @param {string} id - El ID del personaje a buscar.
 * @returns {Observable<any>} - Un observable que emite la respuesta de la API.
 */
  getCharacterById(id:string){
    return this.http.get<any>(`https://quixotic-ong-edgardo90.koyeb.app/api/superhero/${id}`);
  }
  
}
