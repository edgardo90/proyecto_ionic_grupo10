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


  constructor(
    private router: Router,
    private loginService: LoginService,
    private alertController: AlertController,
    private toastController: ToastController,
  ) { }

  async presentToast(message: string, position: "top" | "bottom" | "middle" | undefined = "middle", color: "danger" | "success" = "danger") {
    const toast = await this.toastController.create({
      message: message,
      duration: 1800,
      color: color,
      position: position
    });
    await toast.present();
  }

  ngOnInit() {
  }

  async registerUser() {
    const { res, err } = await this.loginService.postRegisterUser(this.email, this.password)
    if (err) {
      console.log({ err })
      const alert = await this.alertController.create({
        header: "Error!",
        message: `${err.message}`,
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
    if (res) {
      await this.presentToast("usuario creado exitosamente", "top", "success")
      this.router.navigateByUrl("")
    }
  }

}
