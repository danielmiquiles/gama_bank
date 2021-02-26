import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastestReleaseComponent } from './lastest-release.component';

describe('LastestReleaseComponent', () => {
  let component: LastestReleaseComponent;
  let fixture: ComponentFixture<LastestReleaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LastestReleaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LastestReleaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
