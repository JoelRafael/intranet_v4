import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubdatatableComponent } from './clubdatatable.component';

describe('ClubdatatableComponent', () => {
  let component: ClubdatatableComponent;
  let fixture: ComponentFixture<ClubdatatableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClubdatatableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClubdatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
