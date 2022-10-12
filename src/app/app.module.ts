import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule} from "@angular/forms";
import {LoginComponent} from "./components/login/login.component";
import {HomeComponent} from "./components/mainScreen/home/home.component";
import {BoardComponent} from "./components/mainScreen/board/board.component";
import {GalleryComponent} from "./components/mainScreen/gallery/gallery.component";
import {NotesComponent} from "./components/mainScreen/notes/notes.component";
import {RollsComponent} from "./components/mainScreen/rolls/rolls.component";
import {headerComponent} from "./components/header/header.component";
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule, Routes} from "@angular/router";
import {mainScreenComponent} from "./components/mainScreen/mainScreen.component";
import {HttpClientModule} from "@angular/common/http";

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
    mainScreenComponent,

  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    NoopAnimationsModule,
    HttpClientModule,
  ],
  providers: [LoginComponent, mainScreenComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
