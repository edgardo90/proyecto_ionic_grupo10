import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FavoritosService } from '../services/favoritos.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  personajes_favoritos: any[] = [];

  constructor(private router: Router, private favoritosService: FavoritosService) {
    this.personajes_favoritos = this.favoritosService.obtenerFavoritos(); // Cargar favoritos al inicializar
  }

  Agregar_favoritos(personaje: any) {
    this.favoritosService.agregarFavorito(personaje);
    this.personajes_favoritos = this.favoritosService.obtenerFavoritos(); // Actualiza la lista en el componente
  }

  /*
  goToCharacterDetail(id: number) {
    this.router.navigate(['/tabs/tab2', id]);
  }
  */
}
