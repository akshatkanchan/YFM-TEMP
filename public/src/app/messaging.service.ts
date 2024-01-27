import { Injectable } from '@angular/core';
import { messaging } from 'firebase/app'
import 'firebase/messaging';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { AuthService } from './core/auth.service';
import { Http } from '@angular/http';
import { User } from './core/user';

@Injectable()
export class MessagingService {

  messaging;
  currentMessage = new BehaviorSubject(null)
  user: User={}

  constructor(private auth:AuthService, private http:Http) {
    try{
      this.messaging = messaging();
    }
    catch(e){
      console.log('Unable to Instantiate Firebase Messaing', e);
    }
 
   }

  async updateToken(token) {

    this.auth.user.subscribe(data=>{

      this.user=data[0]
      var wToken = {
        userId:this.user.id,
        webToken:token,
        ownerId : this.user.ownerId
      }

      this.http.post('/Voip/insertWebToken', wToken).subscribe()

    })
    
  }

  getPermission() {
        try{
          this.messaging.requestPermission()
          .then(() => {
            console.log('Notification permission granted.');
            return this.messaging.getToken()
          })
          .then(token => {
            console.log(token)
            this.updateToken(token)
          })
          .catch((err) => {
            console.log('Unable to get permission to notify.', err);
          });
        }
        catch(e)
        {
          console.log('Unable to Instantiate Firebase Messaing', e);
        }
    }

    receiveMessage() {
      try{
        this.messaging.onMessage((payload) => {
          if(payload!=null)
          {
            console.log("Message received. ", payload);
            this.currentMessage.next(payload)
          }
        });
      }
      catch(e)
      {
        console.log('Unable to Instantiate Firebase Messaing', e);
      }
    }

}
