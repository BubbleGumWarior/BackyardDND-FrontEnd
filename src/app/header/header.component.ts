import {Component, EventEmitter, OnInit, Output} from "@angular/core";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class headerComponent implements OnInit {
  @Output() menuEvent = new EventEmitter<string>();
  ngOnInit(): void {

  }

  constructor(private router: Router) {
  }

  activeLink(e:any) {
    console.log(e[1].tagName);
    if (e[1].tagName === 'A'){
      const actLink = e[2];
      console.log(actLink);
      const list = document.querySelectorAll('.list');
      list.forEach((item) =>
        item.classList.remove('active'));
      actLink.classList.add('active');

      let tabId = e[2].id;

      this.menuEvent.emit(tabId);
    }
  }
}
