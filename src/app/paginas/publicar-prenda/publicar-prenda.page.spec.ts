import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PublicarPrendaPage } from './publicar-prenda.page';

describe('PublicarPrendaPage', () => {
  let component: PublicarPrendaPage;
  let fixture: ComponentFixture<PublicarPrendaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicarPrendaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
