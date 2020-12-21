import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DatePiteComponent } from './date-pite.component';

describe('DatePiteComponent', () => {
  let component: DatePiteComponent;
  let fixture: ComponentFixture<DatePiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatePiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatePiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
