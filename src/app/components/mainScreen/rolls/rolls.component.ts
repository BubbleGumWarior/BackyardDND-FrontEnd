import { Component, OnInit} from "@angular/core";

@Component({
  selector: 'app-rolls',
  templateUrl: './rolls.component.html',
  styleUrls: ['./rolls.component.css']
})

export class RollsComponent implements OnInit {
  toggleActive() {
    const list = document.querySelectorAll('.navigation');
    list.forEach((item) =>
      item.classList.toggle('active'));
  }


  ngOnInit(): void {
  }


}
