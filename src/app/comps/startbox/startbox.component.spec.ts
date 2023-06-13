import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartboxComponent } from './startbox.component';

describe('StartboxComponent', () => {
  let component: StartboxComponent;
  let fixture: ComponentFixture<StartboxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StartboxComponent]
    });
    fixture = TestBed.createComponent(StartboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
