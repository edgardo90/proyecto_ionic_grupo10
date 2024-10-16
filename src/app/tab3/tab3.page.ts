import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FavoritosService } from '../services/favoritos.service';
import html2canvas from 'html2canvas';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  personajes_favoritos: any[] = [];

  constructor(
    private router: Router,
    private favoritosService: FavoritosService
    ) {
    this.personajes_favoritos = this.favoritosService.obtenerFavoritos(); // Cargar favoritos al inicializar
  }

  goToCharacterDetail(id: number) {
    this.router.navigate(['/tabs/tab2', id]);
  }

  quitarFavorito(id: number){
    this.personajes_favoritos = this.personajes_favoritos.filter(p => p.id !== id);
    this.favoritosService.actualizarFavoritos(this.personajes_favoritos);
    console.log("Personaje eliminado")
  }

  capturarImagen(indice: number, nombrePersonaje: string) {
    const element = document.getElementById('imagen-' + indice) as HTMLElement;
    if (element) {
      html2canvas(element, { useCORS: true }).then((canvas: HTMLCanvasElement) => {

        this.descargar(canvas, nombrePersonaje);
      }).catch(error => {
        console.error('Error al capturar la imagen:', error);
      });
    } else {
      console.error('No se encontró el elemento con id imagen-' + indice);
    }
  }
  
  descargar(canvas: HTMLCanvasElement, nombrePersonaje: string) {
    const link = document.createElement('a');
    link.href = canvas.toDataURL();
    link.download = `${nombrePersonaje}.png`;
    link.click();
  }
}
