import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PersonalComponent } from './personal/personal.component';
import { OfficialComponent } from './official/official.component';

@NgModule({
  declarations: [
    AppComponent,
   
    PersonalComponent,
    OfficialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
