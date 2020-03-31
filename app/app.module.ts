import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuotesDisplayComponent } from './quotes-display/quotes-display.component';
import { QuoteEntryComponent } from './quote-entry/quote-entry.component';
import { HighlightDirective } from './highlight.directive';
import { DayCountPipe } from './day-count.pipe';

@NgModule({
  declarations: [
    AppComponent,
    QuotesDisplayComponent,
    QuoteEntryComponent,
    HighlightDirective,
    DayCountPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
