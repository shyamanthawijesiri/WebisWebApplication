import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaycoursesComponent } from './displaycourses.component';

describe('DisplaycoursesComponent', () => {
  let component: DisplaycoursesComponent;
  let fixture: ComponentFixture<DisplaycoursesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplaycoursesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplaycoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
