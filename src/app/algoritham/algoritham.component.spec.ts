import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlgorithamComponent } from './algoritham.component';

describe('AlgorithamComponent', () => {
  let component: AlgorithamComponent;
  let fixture: ComponentFixture<AlgorithamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlgorithamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlgorithamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
