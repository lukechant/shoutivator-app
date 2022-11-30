import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlogansContainerComponent } from './slogans-container.component';

describe('SlogansContainerComponent', () => {
  let component: SlogansContainerComponent;
  let fixture: ComponentFixture<SlogansContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlogansContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlogansContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
