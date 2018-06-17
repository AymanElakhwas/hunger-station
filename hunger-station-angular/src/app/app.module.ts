import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CutomerModule } from './modules/cutomer/cutomer.module'


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CutomerModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
