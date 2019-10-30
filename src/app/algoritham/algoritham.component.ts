import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-algoritham',
  templateUrl: './algoritham.component.html',
  styleUrls: ['./algoritham.component.css']
})
export class AlgorithamComponent implements OnInit {

  switchkey = true;
  switchkey2 = false;
  logobserve: Observable<any[]>;
  logdata = [];
  accessList = [];
  accessList2 = [];
  targetDataHashTree = 1;
  accesslist_len = 0;
  unauther = true;
  s=0;

  user: Observable<any[]>;


  constructor(public firestore: AngularFirestore) { }

  ngOnInit() {
    this.logobserve = this.firestore.collection("logdata").valueChanges();
    this.logobserve.subscribe((data) => {
      this.logdata = [];
      data.forEach(element => {
        this.firestore.collection("Users").doc(element.doneBy).get().subscribe((data) => {
          let temp = {
            date: element.date,
            filename: element.fileid,
            username: data.data().userid,
            operation: element.operation,
            ulv: this.hashCode(data.data().userid),
            chash: this.hashCode(element.operation),
            sign: this.hashCode(data.data().sign),

            user_name: data.data().username,
            file_name: element.filename,
            auauthorized:data.data().Authorized
          }

          this.logdata.push(temp);
          console.log(data.data().Authorized);
        });
      });
    })
  }

  hashCode(s) {
    var h = 0, l = s.length, i = 0;
    if (l > 0)
      while (i < l)
        h = (h << 5) - h + s.charCodeAt(i++) | 0;
    return h;
  }
  switch() {
    this.switchkey = false;
    this.unauther = true;
    this.switchkey2 = true;
  }
  switch2() {
    this.switchkey = true;
    this.unauther = true;
    this.switchkey2 = false;
  }
  switch3(){
    this.switchkey = true;
    this.unauther = false;
    this.switchkey2 = true;
  }

  accesslistgeneration() {
    this.switchkey = false;
    this.unauther = true;
    this.switchkey2 = true;
    let hint=false

    
    this.accessList = [];
    this.logdata.forEach(element => {
      if (this.accessList.length != 0) {
        this.accessList.forEach(element2 => {
          // console.log((element.user_name == element2.username && element.file_name == element2.filename))

          if (element2.username == element.user_name && element.file_name == element2.filename) {
              hint = false;
          }
          else{
            hint= true;
          }
           
        });

        if(hint){
          let temp = {
            username: element.user_name,
            filename: element.file_name,
            authorized:element.auauthorized
          }

          this.accessList.push(temp);
          this.accesslist_len += 1;
        
        }
      }
      else {
        // alert(this.accessList.length);
        let temp = {
          username: element.user_name,
          filename: element.file_name,
          authorized:element.auauthorized

        }

        this.accessList.push(temp);
        this.accesslist_len += 1;
      }
    });
  }


  unauthorizedlist(){
    this.switchkey = true;
    this.unauther = false;
    this.switchkey2 = true;
    this.accessList2 = [];
    if(this.accessList.length == 0){
    }
    this.user = this.firestore.collection("Users",ref => ref.where("Authorized","==","true")).valueChanges();
    this.user.subscribe((data)=>{
      this.accessList.forEach(element1 => {
         data.forEach(element2 => {
            if(element2.username == element1.username)
            {
              this.accessList2.push(element1)            
            }
            else
            {
              this.s+=1;
            }
        });
      });
      
    })
    
  }

  // currentIdlog_datahash_MHTsubtree(username,filename) : boolean{
  //   console.log(this.accessList);
  //   this.accessList.forEach(element => {
  //     // console.log((element.username == username && element.filename == filename))
  //     if(element.username == username)
  //     {
  //       return false;
  //     }
  //     else
  //       return false;
  //   });
  //   return true;
  // }

}
