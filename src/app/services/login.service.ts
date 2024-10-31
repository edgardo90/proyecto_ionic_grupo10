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

  async postRegisterUser(email: string, password: string) {
    let res;
    let err;
    try {
      res = await this.auth.createUserWithEmailAndPassword(email, password);
    } catch (error:any) {
      err = error
    }
    return {res , err}
  }

  getInfoUser(){
    return this.auth.authState
  }

  async logOut(){
    this.auth.signOut()
  }

}
