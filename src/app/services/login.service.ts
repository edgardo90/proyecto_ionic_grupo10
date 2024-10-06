import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/compat/auth";
import firebase from "@firebase/app-compat"

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private auth: AngularFireAuth
  ) { }

  async loginSubmit(email: string, password: string) {
    try {
      return await this.auth.signInWithEmailAndPassword(email, password)
    } catch (error: any) {
      console.log({ error })
      return null
    }
  }
  
}
