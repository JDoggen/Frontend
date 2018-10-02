import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BitcoinLastDayComponent } from './bitcoin-last-day.component';

describe('BitcoinLastDayComponent', () => {
  let component: BitcoinLastDayComponent;
  let fixture: ComponentFixture<BitcoinLastDayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BitcoinLastDayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BitcoinLastDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
