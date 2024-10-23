import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharacterService } from '../services/character.service';
import { FavoritosService } from '../services/favoritos.service';
import { AlertController, ToastController } from '@ionic/angular';



@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  personaje: any; // Variable para almacenar los datos del personaje

  constructor(
    private route: ActivatedRoute,
    private characterService: CharacterService,
    private favoritosService: FavoritosService,
    public alertController:AlertController,
    public toastController:ToastController
 //   private tab3Page: Tab3Page
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id'); // Obtener el ID del personaje desde la ruta
    if (id) {
      this.obtenerPersonaje(id); // Llamar a la función que obtiene el personaje
      console.log('ID del personaje:', id);
    }
  }

/**
 // obtengo el personaje por id desde tab1 y lo muestro en tab2
 * @function obtenerPersonaje
 * @description Llamar a la API para obtener los detalles de un personaje por su ID utilizando el servicio CharacterService.
 *              Asigna la respuesta a la variable personaje si la llamada es exitosa, de lo contrario, maneja los errores.
 * @param {string} id - El ID del personaje a buscar.
 */
  obtenerPersonaje(id: string) {
    this.characterService.getCharacterById(id).subscribe( // Llamar al servicio para obtener el personaje por ID
      (data: any) => {
        this.personaje = data; // Asignar la respuesta a la variable personaje
        console.log('Detalles del personaje:', this.personaje);
      },
      (error: any) => {
        console.log('Error al obtener los detalles del personaje', error);
      }
    );
  }

/**
 * @function AgregarFavoritos
 * @description Para llamar a un método en tab3.page.ts, donde guardamos los personajes favoritos en una lista
 * @param {any} personaje - El personaje elegido como favorito
 */
AgregarFavoritos() {
  this.favoritosService.agregarFavorito(this.personaje); 
  console.log(`${this.personaje.name} ha sido agregado a favoritos.`);
//this.presentToast('Personaje agregado a favoritos');

}


// Función para mostrar un mensaje emergente
esFavorito(id: number): boolean {
  return this.favoritosService.esFavorito(id);
}


toggleFavorito(personaje: any) {
  if (this.esFavorito(personaje.id)) {
    this.favoritosService.quitarFavorito(personaje.id); // Eliminar favorito
  } else {
    this.favoritosService.agregarFavorito(personaje); // Agregar favorito
  }
}

}
