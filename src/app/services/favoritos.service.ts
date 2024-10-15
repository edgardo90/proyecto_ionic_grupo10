import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FavoritosService {
  private personajes_favoritos: any[] = [];

  agregarFavorito(personaje: any) {
    // Verificar si el personaje ya está en la lista
    const existe = this.personajes_favoritos.some(p => p.id === personaje.id);
    
    if (!existe) {
      this.personajes_favoritos.push(personaje);
      console.log('Personaje agregado:', personaje);
    } else {
      console.log('El personaje ya existe en la lista:', personaje);
    }
  }

  obtenerFavoritos() {
    return this.personajes_favoritos;
  }

  actualizarFavoritos(nuevaLista: any[]) {
    this.personajes_favoritos = nuevaLista;
  }

}
