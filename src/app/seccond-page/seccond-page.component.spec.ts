import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccondPageComponent } from './seccond-page.component';

describe('SeccondPageComponent', () => {
  let component: SeccondPageComponent;
  let fixture: ComponentFixture<SeccondPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeccondPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeccondPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
