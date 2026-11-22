import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MissolicitudesPage } from './missolicitudes.page';

describe('MissolicitudesPage', () => {
  let component: MissolicitudesPage;
  let fixture: ComponentFixture<MissolicitudesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MissolicitudesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
