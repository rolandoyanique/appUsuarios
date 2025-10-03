import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LisUsuariosComponent } from './lis-usuarios.component';

describe('LisUsuariosComponent', () => {
  let component: LisUsuariosComponent;
  let fixture: ComponentFixture<LisUsuariosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LisUsuariosComponent]
    });
    fixture = TestBed.createComponent(LisUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
