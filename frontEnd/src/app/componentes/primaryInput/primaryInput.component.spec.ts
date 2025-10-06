/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PrimaryInputComponent } from './primaryInput.component';

describe('PrimaryInputComponent', () => {
  let component: PrimaryInputComponent;
  let fixture: ComponentFixture<PrimaryInputComponent>;

  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations: [ PrimaryInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimaryInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
