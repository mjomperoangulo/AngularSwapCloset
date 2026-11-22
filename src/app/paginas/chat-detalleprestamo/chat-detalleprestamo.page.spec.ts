import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChatDetalleprestamoPage } from './chat-detalleprestamo.page';

describe('ChatDetalleprestamoPage', () => {
  let component: ChatDetalleprestamoPage;
  let fixture: ComponentFixture<ChatDetalleprestamoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatDetalleprestamoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
