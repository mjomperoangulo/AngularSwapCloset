import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChatDetallePage } from './chat-detalle.page';

describe('ChatDetallePage', () => {
  let component: ChatDetallePage;
  let fixture: ComponentFixture<ChatDetallePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatDetallePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
