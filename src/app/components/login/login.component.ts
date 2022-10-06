import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {UserModel} from "./model/user.model";
import {loginUser} from "../../services/userLogin.service";
import { AuthService } from '../../services/auth.service';
import {TokenStorageService} from "../../services/token-storage.service";

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
  isSuccessful = false;
  isSignUpFailed = false;
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';

  constructor(private router: Router, private service:loginUser, private authService: AuthService, private tokenStorage: TokenStorageService) {  }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
    }
  }
  toggleLogin() {
    const list = document.querySelectorAll('.container');
    list.forEach((item) =>
      item.classList.toggle('active'));
  }

  onSubmit(): void {
    let User = new UserModel(this.userName, this.email, this.password,);

    this.authService.register(User).subscribe({
      next: data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    });
  }

  onLogin(): void {
    let User = new UserModel(this.userName, "", this.password,);

    this.authService.login(User).subscribe({
      next: data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.reloadPage();
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    });
  }

  reloadPage(): void {
    window.location.reload();
  }


/*  logIn() {
    let bLogin = this.service.loginUser(this.userName, this.password);
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

  createAccount($event: SubmitEvent) {
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
  }*/
}

