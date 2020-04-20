import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlarmasComponent } from './alarmas.component';

describe('AlarmasComponent', () => {
  let component: AlarmasComponent;
  let fixture: ComponentFixture<AlarmasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlarmasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlarmasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
