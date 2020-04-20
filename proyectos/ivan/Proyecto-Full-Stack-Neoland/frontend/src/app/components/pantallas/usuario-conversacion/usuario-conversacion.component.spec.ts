import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioConversacionComponent } from './usuario-conversacion.component';

describe('UsuarioConversacionComponent', () => {
  let component: UsuarioConversacionComponent;
  let fixture: ComponentFixture<UsuarioConversacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuarioConversacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioConversacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
