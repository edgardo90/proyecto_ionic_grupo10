import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-acerca',
  templateUrl: './acerca.page.html',
  styleUrls: ['./acerca.page.scss'],
})
export class AcercaPage implements OnInit {


constructor(private modalController: ModalController) {}


dismissModal() {
  this.modalController.dismiss();
}


  ngOnInit() {
  }

}
