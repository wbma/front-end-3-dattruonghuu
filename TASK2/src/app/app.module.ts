import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {DigitransitService} from './services/digitransit.service';
import {ListMediaComponent} from './list-media/list-media.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ListMediaComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [DigitransitService],
  bootstrap: [AppComponent],
})
export class AppModule {}
