import { Component } from '@angular/core';
import * as express from 'express';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent {


/*   const express = require("express");
  const path = require("path");

  const app = express();
  const server = require("http").createServer(this.app);
  const io = require("socket.io")(this.server);

  const socket = this.io('http://localhost:3000'); */
  messages: any = [{
    message: 'teste',
    author: 'Joao'
  },{
    message: 'testadora',
    author: 'Maria'
  }];
renderMessage(message: any) {
    this.messages.push(message) 
  };

/* socket.on('receivedMessage', function (message) {
    renderMessage(message);
  });
socket.on('previusMessages', function (messages) {
  for (message of messages) {
    renderMessage(message);
  };
}); */
/* $('#chat').submit(function (event) {
  event.preventDefault();
  var author = $('input[name=username]').val();
  var message = $('input[name=message]').val();

  if (author.length && message.length) {
    var messageObject = {
      author: author,
      message: message,

    };
    this.renderMessage(messageObject);
    this.socket.emit('Send Message', messageObject);
  }
}); */
onSubmit(form: any){
  this.messages.push(form)
  console.log(form)
  
};

}
