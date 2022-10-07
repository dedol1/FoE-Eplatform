import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  response: any;
  username: string = "";
  password: string = "";

  constructor(private loginService:AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  login() {
    const payload = {
      "username": this.username,
      "password": this.password
    }
    this.loginService.login(payload).subscribe(
      success => {
        this.response = success;
        this.setStorage();
        console.log(success)
        console.log(sessionStorage)
        this.checkUserRole()

      },
      error => {
        this.response = error;
        console.log(error)
      }
    )
  }

  isLoggedIn() {
    const token = sessionStorage.getItem('token');
    return token

  }

  isAdmin() {
    const role = sessionStorage.getItem('role')
    if (role == "ROLE_ADMIN") {
      return role;
    }
    return null
  }

  setStorage() {
    sessionStorage.setItem("email", this.response.email)
    sessionStorage.setItem("username", this.response.username)
    sessionStorage.setItem("token", this.response.accessToken)
    sessionStorage.setItem("id", this.response.id)
    sessionStorage.setItem("role", this.response.roles[0])
  }

  checkUserRole() {
    if (this.response.roles[0] == "ROLE_USER") {
      this.router.navigate(['student-dashboard']);
    }
    if (this.response.roles[0] == "ROLE_MODERATOR") {
      this.router.navigate(['lecturer-dashboard']);
    }
    if (this.response.roles[0] == "ROLE_ADMIN") {
      this.router.navigate(['dashboard']);
    }
  }
}
