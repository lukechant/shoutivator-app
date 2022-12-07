import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlogansComponent } from './slogans.component';

describe('SlogansComponent', () => {
  let component: SlogansComponent;
  let fixture: ComponentFixture<SlogansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlogansComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlogansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
