import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FavoritosService } from '../services/favoritos.service';
import { jsPDF } from 'jspdf';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  personajes_favoritos: any[] = [];
  showAlert = false;
  personajeParaBorrar: any;

  constructor(
    private router: Router,
    private favoritosService: FavoritosService,
    private alertcontroller: AlertController
    ) {
    this.personajes_favoritos = this.favoritosService.obtenerFavoritos(); // Cargar favoritos al inicializar
  }

  /**
   * @function goToCharacterDetail
   * @description Navega a la página de detalles del personaje con el ID proporcionado.
   * @param {number} id - El ID del personaje al que se desea navegar.
   */
  goToCharacterDetail(id: number) {
    this.router.navigate(['/tabs/tab2', id]);
  }

  /**
   * @function quitarFavorito
   * @description Borra el personaje de la lista de favoritos.
   * @param {number} id - El ID del personaje al que se desea navegar.
   */
  quitarFavorito(id: number){
    this.personajes_favoritos = this.personajes_favoritos.filter(p => p.id !== id);
    this.favoritosService.actualizarFavoritos(this.personajes_favoritos);
    console.log("Personaje eliminado")
  }

  /**
   * @function descargarPdf
   * @description Genera y descarga un archivo PDF con la información detallada de un personaje.
   *              Utiliza la biblioteca jsPDF para crear el PDF, incluyendo texto e imágenes.
   * @param {any} personaje - El objeto que contiene la información del personaje a incluir en el PDF.
   */
  descargarPdf(personaje: any) {
    const pdf = new jsPDF('p', 'mm', 'a4');
  
    // Configurar el contenido del PDF
    pdf.setFontSize(18); // Tamaño de fuente para el título
    pdf.text(personaje.name, 105, 20, { align: 'center' }); // Ajusta la posición 
  
    // Descargar la imagen del personaje
    const imgData = personaje.image.url; // URL de la imagen del personaje en la api
  
    // Definir el tamaño de la imagen en mm (200px)
    const imgWidth = 200 * 0.264583; // Convertir 200px a mm
    const imgHeight = 200 * 0.264583; // Convertir 200px a mm
  
    // Agregar la imagen al PDF
    pdf.addImage(imgData, 'PNG', 75, 30, imgWidth, imgHeight); //  imagen, formato, x, y, ancho, alto
  
    // Añadir atributos al PDF
    pdf.setFontSize(16); // Tamaño de fuente para el contenido
    pdf.text('Información Personal', 20, 100); // Título de la sección
    pdf.setFontSize(12); // Tamaño de fuente para los detalles
    pdf.text(`Nombre Completo: ${personaje.biography['full-name']}`, 20, 110); // Detalles del personaje, posición x, posición y
    pdf.text(`Identidad Secreta: ${personaje.biography['alter-egos']}`, 20, 120); 
    pdf.text(`Género: ${personaje.appearance.gender}`, 20, 130);
    pdf.text(`Raza: ${personaje.appearance.race}`, 20, 140);
  
    // Sección de Poderes y Habilidades
    pdf.setFontSize(16);
    pdf.text('Poderes y Habilidades', 20, 150);
    pdf.setFontSize(12);
    pdf.text(`Combate: ${personaje.powerstats.combat}`, 20, 160);
    pdf.text(`Durabilidad: ${personaje.powerstats.durability}`, 20, 170);
    pdf.text(`Inteligencia: ${personaje.powerstats.intelligence}`, 20, 180);
    pdf.text(`Poder: ${personaje.powerstats.power}`, 20, 190);
    pdf.text(`Velocidad: ${personaje.powerstats.speed}`, 20, 200);
    pdf.text(`Fuerza: ${personaje.powerstats.strength}`, 20, 210);

    // biografía
    pdf.setFontSize(16);
    pdf.text('Biografía', 20, 220);
    pdf.setFontSize(12);
    pdf.text(`Publicado por: ${personaje.biography.publisher}`, 20, 230);
    pdf.text(`Primera Aparición: ${personaje.biography['first-appearance']}`, 20, 240);
    pdf.text(`Lugar de Nacimiento: ${personaje.biography['place-of-birth']}`, 20, 250);
    pdf.text(`alineación: ${personaje.biography.alignment}`, 20, 260);
    pdf.text(`alert-egos: ${personaje.biography['alter-egos']}`, 20, 270);


  
    
    // Guardar el PDF con el nombre del personaje
    pdf.save(`${personaje.name}.pdf`); // Nombre del archivo PDF generado
  }
  
  /**
   * @function confirmarBorrado
   * @description Activa una alerta para que el usuario confirme si desea borrar el personaje.
   * @param {any} personaje - El personaje a borrar
   */
    async confirmarBorrado(personaje: any) {
      const alert = await this.alertcontroller.create({
        header: 'Confirmar eliminación',
        message: '¿Estás seguro de que quieres eliminar este personaje de tus favoritos?',
        buttons: [
          {
            text: 'Cancelar',
            role: 'cancel',
            handler: () => {
              console.log('Eliminación cancelada');
            }
          },
          {
            text: 'Eliminar',
            handler: () => {
              this.quitarFavorito(personaje.id);
            }
          }
        ]
      });
  
      await alert.present();
    }
}
