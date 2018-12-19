import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxUsefulPipesComponent } from './ngx-useful-pipes.component';

describe('NgxUsefulPipesComponent', () => {
  let component: NgxUsefulPipesComponent;
  let fixture: ComponentFixture<NgxUsefulPipesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxUsefulPipesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxUsefulPipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
