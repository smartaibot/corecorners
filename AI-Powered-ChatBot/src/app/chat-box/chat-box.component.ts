import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-box',
  templateUrl: './chat-box.component.html',
  styleUrls: ['./chat-box.component.css']
})
export class ChatBoxComponent implements OnInit {
  //messages =["Hi how are you?"];
  messages = [{
    "text":"Hi, I am your personal Assistant. Feel free to ask me anything.",
    "self":false,
    "bot":true
  },{
    "text": "How are you?",
    "self":true,
    "bot":false
  }]

  replyMessage = "";
  
  constructor() { }

  ngOnInit(): void {
  }

  reply(){
    if(this.replyMessage.length > 0){
      this.messages.push({
        "text": this.replyMessage,
        "self":true,
        "bot":false
      })
    }
    this.replyMessage = "";
  }
  
}