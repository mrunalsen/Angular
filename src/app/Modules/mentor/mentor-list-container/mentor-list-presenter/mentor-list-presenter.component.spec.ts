import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorListPresenterComponent } from './mentor-list-presenter.component';

describe('MentorListPresenterComponent', () => {
  let component: MentorListPresenterComponent;
  let fixture: ComponentFixture<MentorListPresenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MentorListPresenterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MentorListPresenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
