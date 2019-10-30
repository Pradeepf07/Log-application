import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import {AngularFirestoreModule } from '@angular/fire/firestore';
import { HomeComponent } from './home/home.component';
import { FilelistComponent } from './filelist/filelist.component';
import { UploadfileComponent } from './uploadfile/uploadfile.component';
import { LogsectionComponent } from './logsection/logsection.component';
import { AlgorithamComponent } from './algoritham/algoritham.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    LoginpageComponent,
    HomeComponent,
    FilelistComponent,
    UploadfileComponent,
    LogsectionComponent,
    AlgorithamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    HttpClientModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
