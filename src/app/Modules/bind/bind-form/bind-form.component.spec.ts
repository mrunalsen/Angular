import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BindFormComponent } from './bind-form.component';

describe('BindFormComponent', () => {
  let component: BindFormComponent;
  let fixture: ComponentFixture<BindFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BindFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BindFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
