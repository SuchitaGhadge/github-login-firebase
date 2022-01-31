import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
// import firebase from 'firebase/compat/app';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: AngularFireAuth) { }

  signup(email:string, password:string){
    return this.auth.createUserWithEmailAndPassword(email, password)
  }

  signin(email:string, password:string){
    return this.auth.createUserWithEmailAndPassword(email, password)
    // this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  getUser(){
    return this.auth.authState;
  }

  signOut(){
    return this.auth.signOut();
  }
}
