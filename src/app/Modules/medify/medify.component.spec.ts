import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedifyComponent } from './medify.component';

describe('MedifyComponent', () => {
  let component: MedifyComponent;
  let fixture: ComponentFixture<MedifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedifyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
