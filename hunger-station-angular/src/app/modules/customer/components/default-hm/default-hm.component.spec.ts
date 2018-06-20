import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultHMComponent } from './default-hm.component';

describe('DefaultHMComponent', () => {
  let component: DefaultHMComponent;
  let fixture: ComponentFixture<DefaultHMComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefaultHMComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultHMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
