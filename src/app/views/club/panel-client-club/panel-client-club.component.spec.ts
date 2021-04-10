import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelClientClubComponent } from './panel-client-club.component';

describe('PanelClientClubComponent', () => {
  let component: PanelClientClubComponent;
  let fixture: ComponentFixture<PanelClientClubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanelClientClubComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelClientClubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
