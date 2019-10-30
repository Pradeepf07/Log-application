import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogsectionComponent } from './logsection.component';

describe('LogsectionComponent', () => {
  let component: LogsectionComponent;
  let fixture: ComponentFixture<LogsectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogsectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogsectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
