import { Component, OnInit, Output, EventEmitter } from'@angular/core';
import { Quote} from '../quote'

@Component({
  selector: 'app-quote-entry',
  templateUrl: './quote-entry.component.html',
  styleUrls: ['./quote-entry.component.css']
})
export class QuoteEntryComponent implements OnInit {
  newquote = new Quote("","",0,0,"")
  @Output() addquote = new EventEmitter<Quote>();

  submit(){
    this.addquote.emit(this.newquote);
      }

  constructor() { }

  ngOnInit(): void {
  }

}
