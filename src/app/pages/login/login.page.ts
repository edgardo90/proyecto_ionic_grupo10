import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { LoginService } from "src/app/services/login.service"
import { AlertController, ToastController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string = "";
  password: string = "";

  constructor(
    private router: Router,
    private loginService: LoginService,
    public alertController: AlertController,
  ) { }

  ngOnInit() { }

  async loginSubmit() {
    const loginUser = await this.loginService.loginSubmit(this.email, this.password)
    console.log(loginUser)
    if (!loginUser) {
      const alert = await this.alertController.create({
        header: "Error!",
        message: "Usuario o contraseña incorrecto",
        cssClass:"custom-alert",
        buttons: [
          {
            text: "OK",
          }
        ],
      })
      await alert.present()
      return
    }
    if(loginUser){
      this.router.navigateByUrl("/home/tabs/tab1")
    }
  }


}
