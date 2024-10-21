import { Injectable } from '@angular/core';
import { ToastController,AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class FavoritosService {
  private personajes_favoritos: any[] = [];

constructor(
  public alertController:AlertController,
  public toastController:ToastController
) {

  const favoritosGuardados = localStorage.getItem('personajes_favoritos');
  if (favoritosGuardados) {
    this.personajes_favoritos = JSON.parse(favoritosGuardados);
  }
}

  agregarFavorito(personaje: any) {
    // Verificar si el personaje ya está en la lista
    const existe = this.personajes_favoritos.some(p => p.id === personaje.id);
    const result = this.esFavorito(personaje.id);
    
    if (!result) {
      this.personajes_favoritos.push(personaje);
      // Guardar en localStorage
      this.guardarEnLocalStorage();
      this.presentToast('Personaje agregado a favoritos ⭐');
      console.log('Personaje agregado!!!!:', personaje);
    } else {
      
      console.log('El personaje ya existe en la lista:', personaje);
    }
  }

  // Función para verificar si un personaje es favorito
  esFavorito(id: number): boolean {
    return this.personajes_favoritos.some(p => p.id === id);
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

async presentToast(mensaje: string) {
  const toast = await this.toastController.create({
    message: mensaje,
    duration: 2000,
    color: 'success'
  });
  toast.present();
}



quitarFavorito(id: number){
  this.personajes_favoritos = this.personajes_favoritos.filter(p => p.id !== id);
  this.actualizarFavoritos(this.personajes_favoritos);
  console.log("Personaje eliminado")
  this.presentToast('Personaje eliminado de favoritos ❌');
}


}
