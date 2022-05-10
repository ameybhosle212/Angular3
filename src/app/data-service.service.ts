import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  history:[]=[];
  constructor() { }
  getData():any{
    return this.history
  }
  setData(value:any){
    this.history = value;
    console.log(this.history);
  }
  sendChatdata(){
    // Make an API CALL HERE TO get CHAT DATA
    return ['ABC','BCD'];
    // return [
    //     {'ABC':["Hii","HELLO","WHATS GOING","NOTHING"]},
    //     {"BCD":["Hii","HELLO","WHATS GOING","NOTHING"]},
    //     {"DEF":["Hii","HELLO","WHATS GOING","NOTHING"]}
    // ]
  }
  sendActivitydata(){
    // Make an API CALL HERE TO get ACTIVITY DATA
    return ['ABC','BCD','EFG','GKH'];
  //   return [
  //     {'ABC':["Hii","HELLO","WHATS GOING","NOTHING"]},
  //     {"BCD":["Hii","HELLO","WHATS GOING","NOTHING"]},
  //     {"DEF":["Hii","HELLO","WHATS GOING","NOTHING"]}
  // ]
  }
  getChat(name:any){
    // Call API TO GET SENDERS CHAT
    return [
      {
        'message':"Hii",
        'date':"",
        "emoji":"",
        "attachedTo":"",
        "side":"left"
      },
      {
        'message':"Hii",
        'date':"",
        "emoji":"",
        "attachedTo":"",
        "side":"right"
      },
      {
        'message':"Whats Up",
        'date':"",
        "emoji":"",
        "attachedTo":"",
        "side":"left"
      },
      {
        'message':"Nothing",
        'date':"",
        "emoji":"",
        "attachedTo":"",
        "side":"right"
      }
    ]
  }
}
