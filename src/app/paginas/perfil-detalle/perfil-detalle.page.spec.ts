import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PerfilDetallePage } from './perfil-detalle.page';

describe('PerfilDetallePage', () => {
  let component: PerfilDetallePage;
  let fixture: ComponentFixture<PerfilDetallePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilDetallePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
