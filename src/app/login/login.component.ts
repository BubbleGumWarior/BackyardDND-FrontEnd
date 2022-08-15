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

  onLogin(e: any) {
    console.log("Test")
    e.preventDefault();
    var userName = e.target.elements[0].value;
    var password = e.target.elements[1].value;

    if (userName === 'Bubble' && password === '1234'){
      this.router.navigate(['mainScreen'])
    }
    else {
      e.target.elements[0].value = 'Invalid Username or Password';
      e.target.elements[1].value = 'Invalid Username or Password';
    }
  }
}

