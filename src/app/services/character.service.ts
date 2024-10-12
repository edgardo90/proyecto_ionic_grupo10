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
  ) { }

  getCharacters(personaje: string):Observable<any>{
    const url = `${this.apiUrl}${this.token}${this.endPoint}${personaje}`;
    return this.http.get<any>(url);
  }

  getCharacterById(id:string){
    return this.http.get<any>(`${this.apiUrl}${this.token}/${id}`);
  }

  
}
