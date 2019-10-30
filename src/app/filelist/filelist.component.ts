import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-filelist',
  templateUrl: './filelist.component.html',
  styleUrls: ['./filelist.component.css']
})
export class FilelistComponent implements OnInit {

  fileobserve: Observable<any[]>;
  filedata;
  constructor(public firestore : AngularFirestore, public router:Router) { }

  ngOnInit() {
    this.fileobserve = this.firestore.collection("FileDetails").valueChanges();
      this.fileobserve.subscribe((data)=>{
       if(data.length > 0){
          this.filedata = data
        }
      })
  }


  uploadfiles(){
    this.router.navigate(["home/uploadfile"])
  }
  logman(){
    this.router.navigate(["home/logsection"])
  }
  algoritham_r(){
    this.router.navigate(["home/algoritham"])
  }
  viewdata(filename,fileid){
    sessionStorage.getItem("userid");
    let newId = this.firestore.createId();
    this.firestore.collection("logdata").doc(newId).set({
                    filename : filename,
                    operation : "Read",
                    date : new Date(),
                    fileid : fileid,
                    doneBy : sessionStorage.getItem("userid")
                  }).then(()=>{alert("Sucessfully Read")})
  }
  editdata(filename,fileid){
    sessionStorage.getItem("userid");
    let newId = this.firestore.createId();
    this.firestore.collection("logdata").doc(newId).set({
                    filename : filename,
                    operation : "Write",
                    fileid : fileid,
                    date : new Date(),
                    doneBy : sessionStorage.getItem("userid")
                  }).then(()=>{alert("Sucessfully Write")})
  }
}
