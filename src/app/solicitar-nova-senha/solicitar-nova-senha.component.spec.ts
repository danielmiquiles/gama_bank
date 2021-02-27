import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitarNovaSenhaComponent } from './solicitar-nova-senha.component';

describe('SolicitarNovaSenhaComponent', () => {
  let component: SolicitarNovaSenhaComponent;
  let fixture: ComponentFixture<SolicitarNovaSenhaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolicitarNovaSenhaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitarNovaSenhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
