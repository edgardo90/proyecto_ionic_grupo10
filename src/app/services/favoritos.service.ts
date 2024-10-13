import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FavoritosService {
  private personajes_favoritos: any[] = [];

  agregarFavorito(personaje: any) {
    this.personajes_favoritos.push(personaje);
    console.log('Personaje agregado:', personaje);
  }

  obtenerFavoritos() {
    return this.personajes_favoritos;
  }


}
