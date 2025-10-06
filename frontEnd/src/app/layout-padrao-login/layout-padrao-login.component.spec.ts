/* tslint:disable:no-unused-variable */
import {  ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LayoutPadraoLoginComponent } from './layout-padrao-login.component';

describe('LayoutPadraoLoginComponent', () => {
  let component: LayoutPadraoLoginComponent;
  let fixture: ComponentFixture<LayoutPadraoLoginComponent>;

  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutPadraoLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutPadraoLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
