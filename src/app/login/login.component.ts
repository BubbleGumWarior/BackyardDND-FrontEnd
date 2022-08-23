import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";

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
  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }
  toggleLogin() {
    const list = document.querySelectorAll('.container');
    list.forEach((item) =>
      item.classList.toggle('active'));
  }

  logIn() {
    console.log(this.userName);
    console.log(this.password);

    if (this.userName === 'Bubble' && this.password === '1234'){
      this.router.navigate(['mainScreen'])
    }
    else {
      this.userName = "";
      this.password = "";
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
    if (errors.length > 0){
      let errorMessage = "";
      errors.forEach(function (message) {
        errorMessage += '\n' + message;
      })
      alert(errorMessage);
    }
    else{
      console.log(this.userName, this.password, this.confirmPassword, this.email);

    }
  }
}

