import { Component, OnInit} from'@angular/core';
import {Quote} from '../quote'

@Component({
  selector: 'app-quotes-display',
  templateUrl: './quotes-display.component.html',
  styleUrls: ['./quotes-display.component.css']
})
export class QuotesDisplayComponent implements OnInit {
  quotes: Quote[] =[
    new Quote("George Stephen","Life is all about Choice, its either you make it or leave it",0,0,"Elon Musk")
  ]
  delete(){
    this.quotes.splice(0,1)
  }
 upvote(quote){
   quote.Upvote =  quote.Upvote + 1
 }
 downvote(quote){
  quote.Downvote =  quote.Downvote + 1
}
 addquote(quote){
   quote= new Quote(quote.Username,quote.userquote,0,0,quote.author)
  this.quotes.push(quote)
}
winners:Quote[]=[];
  bestquote(){
    this.winners.splice(0,this.winners.length);
    var largest= this.quotes[0].Upvote;
    var number = null;
    for(var i =0;i<this.quotes.length;i++){
      number=this.quotes[i].Upvote;
      largest = Math.max(largest,number)
    }
    for(var i =0;i<this.quotes.length;i++){
      if (this.quotes[i].Upvote === largest){
        this.winners.push(this.quotes[i])
      }

    }
  }

  constructor() { }

  ngOnInit(): void {
  }
  
}
