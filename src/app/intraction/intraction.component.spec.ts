import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntractionComponent } from './intraction.component';

describe('IntractionComponent', () => {
  let component: IntractionComponent;
  let fixture: ComponentFixture<IntractionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntractionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntractionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
