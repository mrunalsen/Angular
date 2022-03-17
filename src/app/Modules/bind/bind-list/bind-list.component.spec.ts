import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BindListComponent } from './bind-list.component';

describe('BindListComponent', () => {
  let component: BindListComponent;
  let fixture: ComponentFixture<BindListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BindListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BindListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
