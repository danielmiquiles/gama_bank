import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnuityComponent } from './annuity.component';

describe('AnnuityComponent', () => {
  let component: AnnuityComponent;
  let fixture: ComponentFixture<AnnuityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnnuityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnuityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
