import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteEntryComponent } from './quote-entry.component';

describe('QuoteEntryComponent', () => {
  let component: QuoteEntryComponent;
  let fixture: ComponentFixture<QuoteEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuoteEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
