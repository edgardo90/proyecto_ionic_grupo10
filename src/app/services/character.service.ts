import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  private apiUrl = 'http://localhost:5000/api/superhero'; // URL de tu backend

  constructor(private http: HttpClient) {}

  /**
   * @function getCharacters
   * @description Llamar a la API para buscar personajes.
   * @param {string} personaje - Nombre del personaje.
   * @returns {Observable<any>} - Respuesta de la API.
   */
  getCharacters(personaje: string): Observable<any> {
    const url = `${this.apiUrl}/search/${personaje}`;
    return this.http.get<any>(url);
  }

  /**
   * @function getCharacterById
   * @description Llamar a la API para obtener detalles de un personaje por su ID.
   * @param {string} id - ID del personaje.
   * @returns {Observable<any>} - Respuesta de la API.
   */
  getCharacterById(id: string): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<any>(url);
  }
}
