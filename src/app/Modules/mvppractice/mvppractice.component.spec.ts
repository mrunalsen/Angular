import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MvppracticeComponent } from './mvppractice.component';

describe('MvppracticeComponent', () => {
  let component: MvppracticeComponent;
  let fixture: ComponentFixture<MvppracticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MvppracticeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MvppracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
