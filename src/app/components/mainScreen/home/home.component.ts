import { Component, OnInit } from "@angular/core";
import {UserModel} from "../../login/model/user.model";
import {UserCharacter} from "../../login/model/character/userCharacter.model";
import {Router} from "@angular/router";
import {AuthService} from "../../../services/auth.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [ './home.component.css']
})

export class HomeComponent implements OnInit {
  userName: string;
  HealthBarCurrent: number | undefined;
  HealthBarMax: number | undefined;
  HealthBarPercentage: number;
  userCharacter = new UserCharacter("", "", "", "", "", 0, 0, 0, 0, 0, 0, [""], [""], [""], "", [""], [""], "", [0], [0], [0], [0], [0], [0]);

  constructor(private router: Router, private authService:AuthService) { }

  ngOnInit(): void {
    let userName = localStorage.getItem('Username');
    if (userName != null){
      let User = new UserModel(userName, "","",);
      this.authService.loadCharacter(User).then(res => {
        this.userCharacter = res;
        this.HealthBarCurrent = this.userCharacter.currentHealth;
        this.HealthBarMax = this.userCharacter.maxHealth;

        if (this.HealthBarCurrent != null && this.HealthBarMax != null){
          this.HealthBarPercentage = Math.ceil(this.HealthBarCurrent / this.HealthBarMax);
          console.log(this.HealthBarCurrent + " / " +  this.HealthBarMax  + " * 100 = " + this.HealthBarPercentage);
        }
      })
    }
    else{
      alert('Not Logged In!');
      this.router.navigate(['']);
    }
  }
}
