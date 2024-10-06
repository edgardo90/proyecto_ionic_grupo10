import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { LoginService } from "src/app/services/login.service"
import { AlertController, ToastController } from '@ionic/angular';



@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  email: string = "";
  password: string = "";


  constructor() { }

  ngOnInit() {
  }

  async registerUser(){
    console.log(this.email , this.password)
  }

}
