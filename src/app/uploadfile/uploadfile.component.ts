import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-uploadfile',
  templateUrl: './uploadfile.component.html',
  styleUrls: ['./uploadfile.component.css']
})
export class UploadfileComponent implements OnInit {

  constructor(public firestore: AngularFirestore, public router: Router) { }

  ngOnInit() {
  }

  uploaddata(filename) {
    let newId = this.firestore.createId();
    if (sessionStorage.getItem("userid") != "") {
      this.firestore.collection("FileDetails").doc(newId).set(
        {
          filename: filename.value,
          createdon: new Date(),
          owner: sessionStorage.getItem("userid"),
          fileId : newId
        }
      ).then(()=>{
        alert("Sucessfully Uploaded")
      })
      .catch(()=>{
        alert("Error in uploading")
      })
    }
    else {
      this.router.navigate(['/'])
    }
  }
}
