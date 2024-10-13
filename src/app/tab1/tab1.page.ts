import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // se importa el modulo httpclient para poder hacer peticiones http
import { CharacterService } from '../services/character.service'; // se importa el servicio para poder usarlo
import { Router } from '@angular/router'; // se importa el router para poder navegar a otra pagina



interface Personaje{
  id: number;
  name: string;
}

interface ApiResponse{
  response: string;
  results: Personaje[];
}
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  
  personajes :any[] = []; // se crea un arreglo para almacenar los personajes
  error : string = ''; // se crea una variable para almacenar los errores
  nombrePersonaje:string = ''; // se crea una variable para almacenar el nombre del personaje
  

  constructor(
    private characterService:CharacterService,
    private router: Router,
    private http: HttpClient
  ) {}
  
  
/**
 * @function goToCharacterDetail
 * @description Navegar a la página de detalle del personaje
 */

  goToCharacterDetail(id: number) {
    this.router.navigate(['/tabs/tab2', id]); // Navegar con el ID del personaje
  }


  
  /**
  * @description Buscar un personaje por nombre ingresado por el usuario.
   *              Si el nombre ingresado no está vacío, llama a la función llamarApi para buscar el personaje.
   *              Si el nombre está vacío, establece un mensaje de error indicando que no se ingresó ningún nombre.
   */
  SearchCharacter() {
    if (this.nombrePersonaje.trim()) { // Verificamos que se haya ingresado un nombre
      this.llamarApi(this.nombrePersonaje);
    } else {
      this.error ='Error: No se ingresó ningún nombre'
    }
  }


/**
 * @function llamarApi
 * @description Llamar a la API para buscar personajes por nombre utilizando el servicio CharacterService.
 *              Actualiza la lista de personajes si la respuesta es exitosa, de lo contrario, maneja los errores.
 * @param {string} nombre - El nombre del personaje a buscar.
 */
  llamarApi(nombre:string){

    this.characterService.getCharacters(nombre).subscribe(
      (data: any) => {
        if(data.response === 'success'){
          this.personajes = data.results;
          console.log(this.personajes);
          this.error = '';
        } else {
          console.log("error la respuesta no fue exitosa");
          this.error = 'No se encontraron resultados';
        }
      },
      (error: any) => {
        console.log("error en la peticion",error);
      }
    )
  }




  ngOnInit() {
   this.llamarApi('');
  }

}
