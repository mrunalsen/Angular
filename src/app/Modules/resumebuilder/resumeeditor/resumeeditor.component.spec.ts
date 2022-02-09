import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeeditorComponent } from './resumeeditor.component';

describe('ResumeeditorComponent', () => {
  let component: ResumeeditorComponent;
  let fixture: ComponentFixture<ResumeeditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResumeeditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeeditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
