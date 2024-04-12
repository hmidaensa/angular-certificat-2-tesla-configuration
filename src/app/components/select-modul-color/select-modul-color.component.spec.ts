import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectModulColorComponent } from './select-modul-color.component';

describe('SelectModulColorComponent', () => {
  let component: SelectModulColorComponent;
  let fixture: ComponentFixture<SelectModulColorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectModulColorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SelectModulColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
