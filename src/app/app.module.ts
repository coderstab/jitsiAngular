import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JitsiAngularComponent } from './jitsi-angular/jitsi-angular.component';
import { ThankyouComponent } from './thankyou/thankyou.component';

@NgModule({
  declarations: [
    AppComponent,
    JitsiAngularComponent,
    ThankyouComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
