import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Reactive2FormComponent } from './reactive2-form.component';

describe('Reactive2FormComponent', () => {
  let component: Reactive2FormComponent;
  let fixture: ComponentFixture<Reactive2FormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Reactive2FormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Reactive2FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
