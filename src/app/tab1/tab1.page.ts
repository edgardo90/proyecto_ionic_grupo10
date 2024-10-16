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
      this.error = 'No se ingresó ningún nombre'; // Mostramos el mensaje de error si el campo está vacío
      this.personajes = []; // Limpiamos la lista de personajes
    }
  }


/**
 * @function llamarApi
 * @description Llamar a la API para buscar personajes por nombre utilizando el servicio CharacterService.
 *              Actualiza la lista de personajes si la respuesta es exitosa, de lo contrario, maneja los errores.
 * @param {string} nombre - El nombre del personaje a buscar.
 */
llamarApi(nombre: string) {
  this.characterService.getCharacters(nombre).subscribe(
    (data: any) => {
      if (data.response === 'success' && data.results && data.results.length > 0) {
        this.personajes = data.results;  // Actualiza la lista con los personajes obtenidos
        console.log(this.personajes);
        this.error = '';  // Limpiamos cualquier mensaje de error anterior
      } else {
        console.log("Error: la respuesta no fue exitosa o no se encontraron personajes");
        this.personajes = [];  // Limpiamos la lista de personajes
        this.error = 'No se encontraron resultados';  // Mostramos el mensaje de error
      }
    },
    (error: any) => {
      console.log("Error en la petición", error);
      this.personajes = [];  // Limpiamos la lista en caso de error
      this.error = 'Error: Hubo un problema al realizar la búsqueda';  // Mostramos un mensaje de error
    }
  );
}


  ngOnInit() {
   this.llamarApi('super');
  }

}
