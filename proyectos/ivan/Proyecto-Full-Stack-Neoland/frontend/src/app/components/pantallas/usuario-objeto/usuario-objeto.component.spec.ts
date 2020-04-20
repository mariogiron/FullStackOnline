import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioObjetoComponent } from './usuario-objeto.component';

describe('UsuarioObjetoComponent', () => {
  let component: UsuarioObjetoComponent;
  let fixture: ComponentFixture<UsuarioObjetoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuarioObjetoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioObjetoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
