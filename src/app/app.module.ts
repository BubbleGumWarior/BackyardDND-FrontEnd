import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule} from "@angular/forms";
import {LoginComponent} from "./login/login.component";
import {HomeComponent} from "./mainScreen/home/home.component";
import {BoardComponent} from "./mainScreen/board/board.component";
import {GalleryComponent} from "./mainScreen/gallery/gallery.component";
import {NotesComponent} from "./mainScreen/notes/notes.component";
import {RollsComponent} from "./mainScreen/rolls/rolls.component";
import {headerComponent} from "./header/header.component";
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes} from "@angular/router";
import { mainScreenComponent} from "./mainScreen/mainScreen.component";

const appRoutes:Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'mainScreen',
    component: mainScreenComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    BoardComponent,
    GalleryComponent,
    NotesComponent,
    RollsComponent,
    headerComponent,
    mainScreenComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    NoopAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
