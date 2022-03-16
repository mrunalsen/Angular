import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorFormPresenterComponent } from './mentor-form-presenter.component';

describe('MentorFormPresenterComponent', () => {
  let component: MentorFormPresenterComponent;
  let fixture: ComponentFixture<MentorFormPresenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MentorFormPresenterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MentorFormPresenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
