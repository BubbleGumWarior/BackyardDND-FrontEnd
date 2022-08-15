import { Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  userName = "";
  userPassword = "";

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  onLogin(e: any) {
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

