import { Component, OnInit} from "@angular/core";
import {UserModel} from "../../login/model/user.model";
import {UserCharacter} from "../../login/model/character/userCharacter.model";
import {Router} from "@angular/router";
import {AuthService} from "../../../services/auth.service";

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})

export class BoardComponent implements OnInit {
  userName: string;
  userCharacter = new UserCharacter("", "", "", "", "", 0, 0, 0, 0, 0, 0, [""], [""], [""], "", [""], [""], "", [0], [0], [0], [0], [0], [0]);

  constructor(private router: Router, private authService:AuthService) { }

  ngOnInit(): void {
    let userName = localStorage.getItem('Username');
    if (userName != null){
      let User = new UserModel(userName, "","",);
      this.authService.loadCharacter(User).then(res => {
        console.log(res);
        this.userCharacter = res;
        console.log("Path: " + this.userCharacter.imagePath);
      })
    }
    else{
      alert('Not Logged In!');
      this.router.navigate(['']);
    }
  }
}
