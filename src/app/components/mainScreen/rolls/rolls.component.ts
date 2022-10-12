import { Component, OnInit} from "@angular/core";
import {UserModel} from "../../login/model/user.model";
import {Router} from "@angular/router";
import {AuthService} from "../../../services/auth.service";
import {UserCharacter} from "../../login/model/character/userCharacter.model";
import {rollModel} from "./model/roll.model";

@Component({
  selector: 'app-rolls',
  templateUrl: './rolls.component.html',
  styleUrls: ['./rolls.component.css']
})

export class RollsComponent implements OnInit {
  InitialRoll : number;
  Modifier = 0;
  FinalRoll : number;
  userCharacter : UserCharacter;
  private counter: number;
  customDice: 20;
  bVisible = true;



  toggleActive() {
    const list = document.querySelectorAll('.navigation');
    console.log(list);
    list.forEach((item) =>
      item.classList.toggle('active'));
  }

  toggleDeActive() {
    const list = document.querySelectorAll('.navigation');
    console.log(list);
    list.forEach((item) =>
      item.classList.toggle('active'));
  }

  constructor(private router: Router, private authService:AuthService) { }

  ngOnInit(): void {
    let userName = localStorage.getItem('Username');
    if (userName != null){
      let User = new UserModel(userName, "","",);
      this.authService.loadCharacter(User).then(res => {
        this.userCharacter = res;
      })
    }
    else{
      alert('Not Logged In!');
      this.router.navigate(['']);
    }
  }


  rollD20() {
    this.InitialRoll = Math.floor(Math.random() * 20) + 1;
    this.FinalRoll = this.InitialRoll + this.Modifier;
    this.sendRoll()
  }

  rollD6() {
    this.InitialRoll = Math.floor(Math.random() * 20) + 1;
    this.FinalRoll = this.InitialRoll + this.Modifier;
    this.sendRoll()
  }

  rollD4() {
    this.InitialRoll = Math.floor(Math.random() * 20) + 1;
    this.FinalRoll = this.InitialRoll + this.Modifier;
    this.sendRoll()
  }

  rollD12() {
    this.InitialRoll = Math.floor(Math.random() * 20) + 1;
    this.FinalRoll = this.InitialRoll + this.Modifier;
    this.sendRoll()
  }

  rollD8() {
    this.InitialRoll = Math.floor(Math.random() * 20) + 1;
    this.FinalRoll = this.InitialRoll + this.Modifier;
    this.sendRoll()
  }

  rollD10() {
    this.InitialRoll = Math.floor(Math.random() * 20) + 1;
    this.FinalRoll = this.InitialRoll + this.Modifier;
    this.sendRoll()
  }

  AddModifier() {
    this.toggleDeActive();
    this.Modifier = this.Modifier +1;
    console.log(this.Modifier)
  }

  MinusModifier() {
    this.toggleDeActive();
    this.Modifier = this.Modifier -1;
  }

  customRoll() {
    this.bVisible = false;
    console.log(this.bVisible)
  }

  randomCustom() {
    if (isNaN(this.customDice)) {
      alert("Enter a Number Please!")
    }
    else {
      this.bVisible = true;
      console.log(this.bVisible)
      this.InitialRoll = Math.floor(Math.random() * this.customDice) + 1;
      this.FinalRoll = this.InitialRoll + this.Modifier;
      this.sendRoll()
    }
  }

  sendRoll() {
    let userRoll = new rollModel(this.userCharacter.userName, this.InitialRoll, this.Modifier);
    this.authService.sendRoll(userRoll);
  }
}
