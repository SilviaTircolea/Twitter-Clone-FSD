import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AllTweetComponent } from './all-tweet.component';

describe('AllTweetComponent', () => {
  let component: AllTweetComponent;
  let fixture: ComponentFixture<AllTweetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllTweetComponent]
    });
    fixture = TestBed.createComponent(AllTweetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
