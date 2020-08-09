import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppuserComponent } from './appuser/appuser.component';
import { UserlistComponent } from './userlist/userlist.component';
import { EdituserComponent } from './edituser/edituser.component';
import { ViewuserComponent } from './viewuser/viewuser.component';

@NgModule({
  declarations: [
    AppComponent,
    AppuserComponent,
    UserlistComponent,
    EdituserComponent,
    ViewuserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
