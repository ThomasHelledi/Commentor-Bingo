import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BingoComponent } from './components/bingo/bingo.component';
import { BingoPlateControl } from './components/bingo/controls/plate/plate.control';

@NgModule({
  declarations: [
    AppComponent,

    BingoComponent,
    BingoPlateControl,


  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
