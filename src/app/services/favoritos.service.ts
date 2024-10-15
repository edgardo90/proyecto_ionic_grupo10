import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FavoritosService {
  private personajes_favoritos: any[] = [];

constructor() {

  const favoritosGuardados = localStorage.getItem('personajes_favoritos');
  if (favoritosGuardados) {
    this.personajes_favoritos = JSON.parse(favoritosGuardados);
  }
}

  agregarFavorito(personaje: any) {
    // Verificar si el personaje ya está en la lista
    const existe = this.personajes_favoritos.some(p => p.id === personaje.id);
    
    if (!existe) {
      this.personajes_favoritos.push(personaje);
      // Guardar en localStorage
      this.guardarEnLocalStorage();
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
    this.guardarEnLocalStorage();
  }

// Función para guardar en localStorage
private guardarEnLocalStorage() {
  localStorage.setItem('personajes_favoritos', JSON.stringify(this.personajes_favoritos));
}

}
