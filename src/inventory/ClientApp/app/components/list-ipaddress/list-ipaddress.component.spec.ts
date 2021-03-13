import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListIpaddressComponent } from './list-ipaddress.component';

describe('ListIpaddressComponent', () => {
  let component: ListIpaddressComponent;
  let fixture: ComponentFixture<ListIpaddressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListIpaddressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListIpaddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
