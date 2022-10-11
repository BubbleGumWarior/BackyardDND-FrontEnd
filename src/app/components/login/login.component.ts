import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {UserModel} from "./model/user.model";
import {loginUser} from "../../services/userLogin.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  userName: string;
  password: string;
  email: string;
  confirmPassword: string;

  constructor(private router: Router, private service:loginUser) {  }

  ngOnInit(): void {
  }
  toggleLogin() {
    const list = document.querySelectorAll('.container');
    list.forEach((item) =>
      item.classList.toggle('active'));
  }

  logIn() {
    let User = new UserModel(this.userName, "", this.password,)
    let bLogin = this.service.loginUser(User);
    if (bLogin) {
      console.log(bLogin)
      this.router.navigate(['mainScreen']);
    }
    else{
      this.userName = "";
      this.password = "";

      alert("Invalid Login Credentials!")
    }
  }

  validateEmail(mail:string){
    return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(mail);
  }

  createAccount() {
    const errors = [];

    if (typeof this.userName === "undefined" || typeof this.email === "undefined" || typeof this.password === "undefined" || typeof this.confirmPassword === "undefined"){
      errors.push("Please fill in all the fields!")
    }
    else{
      if (this.userName.length < 6) {
        errors.push("Username is too short!")
      }
      if (!this.validateEmail(this.email)) {
        errors.push("Invalid Email!")
      }
      if (this.password != this.confirmPassword){
        errors.push("Passwords do not match!")
      }
      if (this.password.length < 10){
        errors.push("Password is too short!")
      }
    }
    let User;
    if (errors.length > 0) {
      let errorMessage = "";
      errors.forEach(function (message) {
        errorMessage += '\n' + message;
      })
      alert(errorMessage);
    } else {
      User = new UserModel(this.userName, this.email, this.password, );
      console.log(this.service.registerUser(User));
    }
  }
}

