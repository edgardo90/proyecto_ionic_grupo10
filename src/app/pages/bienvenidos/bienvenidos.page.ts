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

  irAInicio() {
    setTimeout(() => {
      this.navCtrl.navigateRoot('/tabs/tab1'); 
    }, 4000); // Tiempo en milisegundos 
  }

}


