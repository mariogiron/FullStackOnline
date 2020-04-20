import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuUsuarioPerfilComponent } from './menu-usuario-perfil.component';

describe('MenuUsuarioPerfilComponent', () => {
  let component: MenuUsuarioPerfilComponent;
  let fixture: ComponentFixture<MenuUsuarioPerfilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuUsuarioPerfilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuUsuarioPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
