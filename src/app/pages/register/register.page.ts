import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { LoginService } from "src/app/services/login.service"
import { AlertController, ToastController } from '@ionic/angular';
import { errorEmail, errorPassword } from "src/app//pages/login/helperFuntionLogin"




@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  email: string = "";
  password: string = "";
  errorInput: { errorEmail: string, errorPassword: string } = {
    errorEmail: "",
    errorPassword: ""
  }



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

  ngOnInit() { }

  handleInputChange(event: Event) {
    const input = event.target as HTMLInputElement; // Cast para acceder a las propiedades
    if (input.name === "email") {
      this.errorInput.errorEmail = errorEmail(input.value)
    }
    if (input.name === "password") {
      this.errorInput.errorPassword = errorPassword(input.value)
    }
  }

  async registerUser() {
    if (!this.email || !this.password) {
      this.errorInput.errorEmail = !this.email ? "email es requerido" : "";
      this.errorInput.errorPassword = !this.password ? "password es requerido" : "";
      await this.presentToast("Por favor completa los datos", "top", "danger")
      return
    }
    if (this.errorInput.errorEmail || this.errorInput.errorPassword) {
      return
    }
    const { res, err } = await this.loginService.postRegisterUser(this.email, this.password)
    if (err) {
      const isErrorEmail = err.code === "auth/email-already-in-use" ? true : false;
      const msjErrorEmail = "El correo ingresado ya está en uso. ¿Ya tienes una cuenta? Intenta iniciar sesión o utiliza un correo diferente."
      const alert = await this.alertController.create({
        header: "Error!",
        message: `${!isErrorEmail ? err.message : msjErrorEmail}`,
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
