import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {

  signup = true;
  users: Observable<any[]>;

  constructor(public firestore : AngularFirestore, public router:Router) { }

  ngOnInit() {
  }
  signup_f(){
    this.signup = false;
  }
  login(){
    this.signup = true;
  }
  login_check(email,pass){
      this.users = this.firestore.collection("Users" , ref=> ref.where("email","==",email.value) && ref.where("password","==",pass.value)).valueChanges();
      this.users.subscribe((data)=>{
        if(data.length == 0){
          alert("Email address or password was wrong")
        }
        else if(data.length == 1){
          console.log(data);
          sessionStorage.userid = data[0].userid;
          this.router.navigate(['/home']);
        }
      })
                    
  }
  new_signup(uname,gender,email,password,signdata,userauthentication){
    let newId = this.firestore.createId();
    this.firestore.collection("Users").doc(newId).set(
      {
        username : uname.value,
        email    : email.value,
        password :  password.value,
        gender   :  gender.value,
        userid   :  newId,
        sign     :  signdata.value,
        Authorized : userauthentication.value
      }
    ).then(()=>{
      alert("Account Created Login with email and password")
    })
     .catch(()=>{
       alert("Error in creating account")
     })
  }

}
