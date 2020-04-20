import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioAvatarComponent } from './usuario-avatar.component';

describe('UsuarioAvatarComponent', () => {
  let component: UsuarioAvatarComponent;
  let fixture: ComponentFixture<UsuarioAvatarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuarioAvatarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioAvatarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
