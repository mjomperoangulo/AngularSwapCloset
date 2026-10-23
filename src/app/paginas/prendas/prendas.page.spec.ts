import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PrendasPage } from './prendas.page';

describe('PrendasPage', () => {
  let component: PrendasPage;
  let fixture: ComponentFixture<PrendasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PrendasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
