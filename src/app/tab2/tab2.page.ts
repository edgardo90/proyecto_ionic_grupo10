import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharacterService } from '../services/character.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  personaje: any; // Variable para almacenar los datos del personaje

  constructor(
    private route: ActivatedRoute,
    private characterService: CharacterService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id'); // Obtener el ID del personaje desde la ruta
    if (id) {
      this.obtenerPersonaje(id); // Llamar a la función que obtiene el personaje
      console.log('ID del personaje:', id);
    }
  }


  // obtengo el personaje por id desde tab1 y lo muestro en tab2
  obtenerPersonaje(id: string) {
    this.characterService.getCharacterById(id).subscribe(
      (data: any) => {
        this.personaje = data; // Asignar la respuesta a la variable personaje
        console.log('Detalles del personaje:', this.personaje);
      },
      (error: any) => {
        console.log('Error al obtener los detalles del personaje', error);
      }
    );
  }
}
