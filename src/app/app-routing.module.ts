import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginpageComponent } from './loginpage/loginpage.component';
import { HomeComponent } from './home/home.component';
import { FilelistComponent } from './filelist/filelist.component';
import { UploadfileComponent } from './uploadfile/uploadfile.component';
import { LogsectionComponent } from './logsection/logsection.component';
import { AlgorithamComponent } from './algoritham/algoritham.component';
import { GraphComponent } from './graph/graph.component';

const routes: Routes = [
  { path:"", component:LoginpageComponent },
  { path:"home" , component:HomeComponent , children:[
    { path : "" , component:FilelistComponent },
    { path:"uploadfile" , component:UploadfileComponent },
    { path:"logsection" , component:LogsectionComponent },
    { path:"algoritham", component: AlgorithamComponent },
    { path:"graph" , component:GraphComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
