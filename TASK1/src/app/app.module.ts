import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ListMediaComponent } from './list-media/list-media.component';
import {HttpClientModule} from "@angular/common/http";
import {MediaService} from "./services/media.service";


@NgModule({
  declarations: [
    AppComponent,
    ListMediaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [MediaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
