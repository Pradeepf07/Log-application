import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logsection',
  templateUrl: './logsection.component.html',
  styleUrls: ['./logsection.component.css']
})
export class LogsectionComponent implements OnInit {

  logobserve: Observable<any[]>;
  logdata=[];
  constructor(public firestore:AngularFirestore) { }

  ngOnInit() {
    this.logobserve = this.firestore.collection("logdata").valueChanges();
    this.logobserve.subscribe((data)=>{
      this.logdata = [];
      data.forEach(element => {
        this.firestore.collection("Users").doc(element.doneBy).get().subscribe((data)=>{
          let temp = {
            date : element.date,
            filename : element.filename,
            username : data.data().username,
            operation : element.operation
          }

          this.logdata.push(temp);
          console.log(data.data().email);
        });
      });
    })
  }

}
