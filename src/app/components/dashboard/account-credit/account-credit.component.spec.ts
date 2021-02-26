import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountCreditComponent } from './account-credit.component';

describe('AccountCreditComponent', () => {
  let component: AccountCreditComponent;
  let fixture: ComponentFixture<AccountCreditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountCreditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountCreditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
