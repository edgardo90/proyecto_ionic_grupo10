import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-bienvenidos',
  templateUrl: './bienvenidos.page.html',
  styleUrls: ['./bienvenidos.page.scss'],
  
})
export class BienvenidosPage implements OnInit {

  constructor(private navCtrl: NavController) {
    this.irAInicio();
  }

  ngOnInit() {
  }

  //para simular la carga de la api
  irAInicio() {
    setTimeout(() => {
      this.navCtrl.navigateRoot('/tabs/tab1'); 
    }, 6000); // Tiempo en milisegundos 
  }

}


