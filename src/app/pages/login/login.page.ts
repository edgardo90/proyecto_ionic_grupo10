import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { LoginService } from "src/app/services/login.service"
import { AlertController, ToastController } from '@ionic/angular';
import { errorEmail, errorPassword } from "./helperFuntionLogin"


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string = "";
  password: string = "";
  error: { errorEmail: string, errorPassword: string } = { errorEmail: "", errorPassword: "" }

  constructor(
    private router: Router,
    private loginService: LoginService,
    public alertController: AlertController,
  ) { }

  ngOnInit() { }

  handleInputChange(event: Event) {
    const input = event.target as HTMLInputElement; // Cast para acceder a las propiedades
    if (input.name === "email") {
      this.error.errorEmail = errorEmail(input.value)
    }
    if (input.name === "password") {
      this.error.errorPassword = errorPassword(input.value)
    }
  }


  async loginSubmit() {
    if (!this.email && !this.password) {
      this.error.errorEmail = "email es requerido";
      this.error.errorPassword = "password es requerido"
      return
    }
    if(this.error.errorEmail || this.error.errorPassword){
      return
    }
    const loginUser = await this.loginService.loginSubmit(this.email, this.password)
    if (!loginUser) {
      const alert = await this.alertController.create({
        header: "Error!",
        message: "Usuario o contraseña incorrecto",
        cssClass: "custom-alert",
        buttons: [
          {
            text: "OK",
          }
        ],
      })
      await alert.present()
      return
    }
    if (loginUser) {
      this.router.navigateByUrl("/tabs/tab1")
    }
  }


}
