import { Component, OnInit} from "@angular/core";
import {UserModel} from "../login/model/user.model";
import {AuthService} from "../../services/auth.service";
import {LoginComponent} from "../login/login.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-mainScreen',
  templateUrl: './mainScreen.component.html',
  styleUrls: ['./mainScreen.component.css']
})

export class mainScreenComponent implements OnInit {
  username?: string;

  constructor(private router: Router, private authService:AuthService) { }

  ngOnInit(): void {
    let userName = localStorage.getItem('Username');
    if (userName != null){
      let User = new UserModel(userName, "","",);
      this.authService.loadCharacter(User).then(res => {
        if (res === null){
          alert("Account Error, Not All Values loaded Properly. Contact Sebastian.")
          this.router.navigate(['']);
        }
      })
    }
    else{
      alert('Not Logged In!');
      this.router.navigate(['']);
    }
  }

  activeMenu = "menuHome";
  arrActive = [
    false,
    false,
    false,
    false,
    false
  ];
  receiveMessage($event: any) {
    this.activeMenu = $event;

    let arrMenu = [
      false,
      false,
      false,
      false,
      false
    ]

    switch (this.activeMenu) {
      case 'menuHome':
        arrMenu[0] = true;
        break;
      case 'menuBoard':
        arrMenu[1] = true;
        break;
      case 'menuRolls':
        arrMenu[2] = true;
        break;
      case 'menuNotes':
        arrMenu[3] = true;
        break;
      case 'menuGallery':
        arrMenu[4] = true;
        break;
    }
    this.arrActive = arrMenu;
  }
}
