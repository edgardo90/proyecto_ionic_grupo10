import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FavoritosService } from '../services/favoritos.service';
import { jsPDF } from 'jspdf';
import { AlertController, ToastController } from '@ionic/angular';
import html2canvas from 'html2canvas';
import { Filesystem, Directory, Encoding } from '@capacitor/filesystem';
import { Share } from '@capacitor/share';
import  { Platform } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page {
  personajes_favoritos: any[] = [];
  showAlert = false;
  personajeParaBorrar: any;

  constructor(
    private router: Router,
    private favoritosService: FavoritosService,
    private alertcontroller: AlertController,
    public toastController: ToastController,
    private platform: Platform
  ) {
    this.personajes_favoritos = this.favoritosService.obtenerFavoritos(); // Cargar favoritos al inicializar
  }

  ionViewWillEnter() {
    this.cargarFavoritos();
  }

  cargarFavoritos() {
    this.personajes_favoritos = this.favoritosService.obtenerFavoritos();
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
  quitarFavorito(id: number) {
    this.personajes_favoritos = this.personajes_favoritos.filter(
      (p) => p.id !== id
    );
    this.favoritosService.actualizarFavoritos(this.personajes_favoritos);
    console.log('Personaje eliminado');
  }

  /**
   * @function descargarPdf
   * @description Genera y descarga un archivo PDF con la información detallada de un personaje.
   *              Utiliza la biblioteca jsPDF para crear el PDF, incluyendo texto e imágenes.
   * @param {any} personaje - El objeto que contiene la información del personaje a incluir en el PDF.
   */
  descargarPdf(personaje: any) {
    const pdf = new jsPDF('p', 'mm', 'a4');
    let y = 10; // Posición inicial de Y
    const maxLineWidth = 180; // Máximo ancho permitido antes de hacer el salto de línea

    // Función para chequear si el texto supera el ancho permitido
    const addTextWithCondition = (text: string, x: number, y: number) => {
      const textWidth = pdf.getTextDimensions(text).w; // Obtener el ancho del texto
      if (textWidth > maxLineWidth) {
        const splittedText = pdf.splitTextToSize(text, maxLineWidth); // Dividir texto
        pdf.text(splittedText, x, y); // Mostrar texto dividido
        return y + splittedText.length * 5; // Retornar la nueva posición Y después de las líneas
      } else {
        pdf.text(text, x, y); // Mostrar el texto en la misma línea
        return y + 5; // Incrementar un poco la posición y
      }
    };

    // Configurar el contenido del PDF
    pdf.setFontSize(30);
    pdf.text(personaje.name, 20, y); // Título del personaje
    y += 10;

    // Descargar la imagen del personaje
    const imgData = personaje.image.url;
    const imgWidth = 60;
    const imgHeight = 80;

    // pdf.addImage(imgData, 'PNG', 20, y, imgWidth, imgHeight); // Agregar imagen
    y += imgHeight + 10;

    // Información Personal
    pdf.setFontSize(20);
    pdf.text('Información Personal', 20, y);
    y += 10;

    pdf.setFontSize(12);
    y = addTextWithCondition(
      `Nombre Completo:  ${personaje.biography['full-name']}`,
      20,
      y
    );
    y = addTextWithCondition(
      `Identidad Secreta:  ${personaje.biography['alter-egos']}`,
      20,
      y
    );
    y = addTextWithCondition(`Género: ${personaje.appearance.gender}`, 20, y);
    y = addTextWithCondition(`Raza: ${personaje.appearance.race}`, 20, y);
    y = addTextWithCondition(`Altura: ${personaje.appearance.height}`, 20, y);
    y = addTextWithCondition(`Peso: ${personaje.appearance.weight}`, 20, y);
    y = addTextWithCondition(
      `Color de Ojos:  ${personaje.appearance['eye-color']}`,
      20,
      y
    );
    y = addTextWithCondition(
      `Color de Cabello: ${personaje.appearance['hair-color']}`,
      20,
      y
    );
    y = addTextWithCondition(
      `Lugar de Nacimiento:  ${personaje.biography['place-of-birth']}`,
      20,
      y
    );

    // Biografía
    y += 5;

    pdf.setFontSize(20);
    pdf.text('Biografía', 20, y);
    y += 10;

    pdf.setFontSize(12);
    y = addTextWithCondition(`Alias:  ${personaje.biography.aliases}`, 20, y);
    y = addTextWithCondition(
      `Primera Aparición:  ${personaje.biography['first-appearance']}`,
      20,
      y
    );
    y = addTextWithCondition(
      `Publicador: ${personaje.biography.publisher}`,
      20,
      y
    );
    y = addTextWithCondition(
      `Alineación: ${personaje.biography.alignment}`,
      20,
      y
    );

    // Conexiones
    y += 5;

    pdf.setFontSize(20);
    pdf.text('Conexiones', 20, y);
    y += 10;

    pdf.setFontSize(12);
    y = addTextWithCondition(
      `Afiliación: ${personaje.connections['group-affiliation']}`,
      20,
      y
    );
    y = addTextWithCondition(
      `Familia:  ${personaje.connections.relatives}`,
      20,
      y
    );

    // Trabajo
    y += 5;

    pdf.setFontSize(20);
    pdf.text('Trabajo', 20, y);
    y += 10;

    pdf.setFontSize(12);
    y = addTextWithCondition(
      `Ocupación:    ${personaje.work.occupation}`,
      20,
      y
    );
    y = addTextWithCondition(`Base:   ${personaje.work.base}`, 20, y);

    // Guardar el PDF con el nombre del personaje
    pdf.save(`${personaje.name}.pdf`);
  }

  /**
   * @function confirmarBorrado
   * @description Activa una alerta para que el usuario confirme si desea borrar el personaje.
   * @param {any} personaje - El personaje a borrar
   */
  async confirmarBorrado(personaje: any) {
    const alert = await this.alertcontroller.create({
      header: 'Confirmar eliminación',
      message:
        '¿Estás seguro de que quieres eliminar este personaje de tus favoritos?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Eliminación cancelada');
          },
        },
        {
          text: 'Eliminar',
          handler: () => {
            this.quitarFavorito(personaje.id);
            this.favoritosService.presentToast(
              'Personaje eliminado de favoritos ❌'
            );
          },
        },
      ],
    });

    await alert.present();
  }

  descargar(personaje: any) {
    if (this.platform.is('mobile')) {
      this.shareMobile(personaje);
    } else {
      this.descargarPdf(personaje);
    }
  }

  async shareMobile(personaje: any) {
    const pdf = new jsPDF('p', 'mm', 'a4');
    let y = 10; // Posición inicial de Y
    const maxLineWidth = 180; // Máximo ancho permitido antes de hacer el salto de línea

    // Función para chequear si el texto supera el ancho permitido
    const addTextWithCondition = (text: string, x: number, y: number) => {
      const textWidth = pdf.getTextDimensions(text).w; // Obtener el ancho del texto
      if (textWidth > maxLineWidth) {
        const splittedText = pdf.splitTextToSize(text, maxLineWidth); // Dividir texto
        pdf.text(splittedText, x, y); // Mostrar texto dividido
        return y + splittedText.length * 5; // Retornar la nueva posición Y después de las líneas
      } else {
        pdf.text(text, x, y); // Mostrar el texto en la misma línea
        return y + 5; // Incrementar un poco la posición y
      }
    };

    // Configurar el contenido del PDF
    pdf.setFontSize(30);
    pdf.text(personaje.name, 20, y); // Título del personaje
    y += 10;

    // Descargar la imagen del personaje
    const imgData = personaje.image.url;
    const imgWidth = 60;
    const imgHeight = 80;

   // pdf.addImage(imgData, 'PNG', 20, y, imgWidth, imgHeight); // Agregar imagen
   // y += imgHeight + 10;

    // Información Personal
    pdf.setFontSize(20);
    pdf.text('Información Personal', 20, y);
    y += 10;

    pdf.setFontSize(12);
    y = addTextWithCondition(
      `Nombre Completo:  ${personaje.biography['full-name']}`,
      20,
      y
    );
    y = addTextWithCondition(
      `Identidad Secreta:  ${personaje.biography['alter-egos']}`,
      20,
      y
    );
    y = addTextWithCondition(`Género: ${personaje.appearance.gender}`, 20, y);
    y = addTextWithCondition(`Raza: ${personaje.appearance.race}`, 20, y);
    y = addTextWithCondition(`Altura: ${personaje.appearance.height}`, 20, y);
    y = addTextWithCondition(`Peso: ${personaje.appearance.weight}`, 20, y);
    y = addTextWithCondition(
      `Color de Ojos:  ${personaje.appearance['eye-color']}`,
      20,
      y
    );
    y = addTextWithCondition(
      `Color de Cabello: ${personaje.appearance['hair-color']}`,
      20,
      y
    );
    y = addTextWithCondition(
      `Lugar de Nacimiento:  ${personaje.biography['place-of-birth']}`,
      20,
      y
    );

    // Biografía
    y += 5;

    pdf.setFontSize(20);
    pdf.text('Biografía', 20, y);
    y += 10;

    pdf.setFontSize(12);
    y = addTextWithCondition(`Alias:  ${personaje.biography.aliases}`, 20, y);
    y = addTextWithCondition(
      `Primera Aparición:  ${personaje.biography['first-appearance']}`,
      20,
      y
    );
    y = addTextWithCondition(
      `Publicador: ${personaje.biography.publisher}`,
      20,
      y
    );
    y = addTextWithCondition(
      `Alineación: ${personaje.biography.alignment}`,
      20,
      y
    );

    // Conexiones
    y += 5;

    pdf.setFontSize(20);
    pdf.text('Conexiones', 20, y);
    y += 10;

    pdf.setFontSize(12);
    y = addTextWithCondition(
      `Afiliación: ${personaje.connections['group-affiliation']}`,
      20,
      y
    );
    y = addTextWithCondition(
      `Familia:  ${personaje.connections.relatives}`,
      20,
      y
    );

    // Trabajo
    y += 5;

    pdf.setFontSize(20);
    pdf.text('Trabajo', 20, y);
    y += 10;

    pdf.setFontSize(12);
    y = addTextWithCondition(
      `Ocupación:    ${personaje.work.occupation}`,
      20,
      y
    );
    y = addTextWithCondition(`Base:   ${personaje.work.base}`, 20, y);

    const pdfOutput = pdf.output('datauristring');
    const base64 = pdfOutput.split(',')[1]; // Extraer solo la parte base64 del URI
  
    // Guardar el archivo PDF en el sistema de archivos móvil
    const path = 'personaje.pdf';
    await Filesystem.writeFile({
      path: path,
      data: base64,
      directory: Directory.Cache,
    }).then(async (res) => {
      const url = res.uri;
  
      // Compartir el archivo PDF
      await Share.share({ url: url });
  
      // Eliminar el archivo después de compartir
      await Filesystem.deleteFile({
        path,
        directory: Directory.Cache,
      });
    });
  }
  

  
}
