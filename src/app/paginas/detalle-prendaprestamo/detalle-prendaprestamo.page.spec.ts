import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetallePrendaprestamoPage } from './detalle-prendaprestamo.page';

describe('DetallePrendaprestamoPage', () => {
  let component: DetallePrendaprestamoPage;
  let fixture: ComponentFixture<DetallePrendaprestamoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallePrendaprestamoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
