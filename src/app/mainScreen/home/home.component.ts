import { Component, OnInit } from "@angular/core";
import { MainScreenModel } from "../mainScreen.model";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [ './home.component.css']
})

export class HomeComponent implements OnInit {
  playerForm: MainScreenModel[] = [
    new MainScreenModel('Sebastian', 'Daeron Brightflame', 'https://thumbs.dreamstime.com/b/silhouette-man-black-white-vector-illustration-model-business-boy-fashion-person-human-man-adult-black-illustration-126113256.jpg')

  ];

  ngOnInit(): void {
  }
}
