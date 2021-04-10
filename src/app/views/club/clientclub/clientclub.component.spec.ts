import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientclubComponent } from './clientclub.component';

describe('ClientclubComponent', () => {
  let component: ClientclubComponent;
  let fixture: ComponentFixture<ClientclubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientclubComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientclubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
