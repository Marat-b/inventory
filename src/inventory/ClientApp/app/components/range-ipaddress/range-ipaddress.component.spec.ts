import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RangeIpaddressComponent } from './range-ipaddress.component';

describe('RangeIpaddressComponent', () => {
  let component: RangeIpaddressComponent;
  let fixture: ComponentFixture<RangeIpaddressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RangeIpaddressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RangeIpaddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
