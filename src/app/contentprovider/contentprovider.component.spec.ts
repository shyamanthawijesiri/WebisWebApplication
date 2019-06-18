import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentproviderComponent } from './contentprovider.component';

describe('ContentproviderComponent', () => {
  let component: ContentproviderComponent;
  let fixture: ComponentFixture<ContentproviderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentproviderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentproviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
