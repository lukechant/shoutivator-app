import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SlogansContainerComponent } from './slogans.container/slogans-container.component';
import { SlogansComponent } from './slogans/slogans.component';

@NgModule({
  declarations: [
    AppComponent,
    SlogansContainerComponent,
    SlogansComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
