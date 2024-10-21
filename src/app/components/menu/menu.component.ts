import { Component, OnInit } from '@angular/core';
import { LoginService } from "src/app/services/login.service"
import { IUser } from "src/interface/user"
import { Router } from "@angular/router";



@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  user: IUser | undefined;
  isLogged: boolean = false

  constructor(
    private loginService: LoginService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.loginService.getInfoUser().subscribe((res) => {
      if (res && res.email && res.uid) {
        console.log(res.email, res.displayName, res.photoURL, res.uid)
        this.user = {
          email: res.email,
          displayName: res.displayName ? res.displayName : "",
          photoURL: res.photoURL ? res.photoURL : "",
          uid: res.uid ? res.uid : "",
        };
        this.isLogged = true;
      } else {
        this.user = undefined
        this.isLogged = false
        this.router.navigateByUrl("")
      }
    })
  }

  handleClickInfoUser() {
    console.log(this.user)
  }

  handleLogOut() {
    this.loginService.logOut().then(res => {
      this.isLogged = false;
      this.user = undefined;
      localStorage.clear();
      this.router.navigateByUrl("")
    })
  }

}
