import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from "angularfire2/database-deprecated";
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../services/auth.service';
import * as firebase from 'firebase/app';

import { ChatMessage } from '../models/chat-message.model';

@Injectable()
export class ChatService {
  user: any;
  chatMessages: FirebaseListObservable<ChatMessage[]>;
  chatMessage: ChatMessage;
  userName: Observable<string>;

  constructor(
    private db: AngularFireDatabase,
    private afAuth: AngularFireAuth
  
  ) { 
    this.afAuth.authState.subscribe(auth => {
      if (auth !==undefined && auth !== null){
        this.user = auth;
      }
    });
  }
sendMessage(msg: String){
  const timestamp = this.getTimeStamp();
  const email = this.user.email;
  this.chatMessages = this.getMessage();
  this.chatMessages.push({
    message: msg,
    timesent: timestamp,
    userName: this.userName,
    email: email
  });
  console.log('Called sendMessage()!');
}

getMessage(): FirebaseListObservable<ChatMessage[]> {
  //query to create message feed binding
  return this.db.list('messages', {
   "query": {
      limitToLast: 25,
      orderByKey: true
    }
  });
}

getTimeStamp(){
  const now = new Date;
  const date = now.getUTCFullYear() + '/' +
              (now.getUTCMonth()+ 1) + '/' +
              now.getUTCDate();
  const time = now.getUTCHours() + ':' +
              now.getUTCMinutes() + ':' +
              now.getUTCSeconds();
              
  return (date + '' +time);
}



}