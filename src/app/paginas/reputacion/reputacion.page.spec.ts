import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReputacionPage } from './reputacion.page';

describe('ReputacionPage', () => {
  let component: ReputacionPage;
  let fixture: ComponentFixture<ReputacionPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ReputacionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
