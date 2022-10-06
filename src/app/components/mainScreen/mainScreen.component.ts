import { Component, OnInit} from "@angular/core";
import { TokenStorageService } from '../../services/token-storage.service';

@Component({
  selector: 'app-mainScreen',
  templateUrl: './mainScreen.component.html',
  styleUrls: ['./mainScreen.component.css']
})

export class mainScreenComponent implements OnInit {
  isLoggedIn = false;
  username?: string;
  currentUser: any;

  constructor(private token: TokenStorageService) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.token.getToken();

    if (this.isLoggedIn) {
      this.currentUser = this.token.getUser();

      this.username = this.currentUser.username;
    }
  }

  logout(): void {
    this.token.signOut();
    window.location.reload();
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
