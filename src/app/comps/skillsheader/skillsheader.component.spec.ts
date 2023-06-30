import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsheaderComponent } from './skillsheader.component';

describe('SkillsheaderComponent', () => {
  let component: SkillsheaderComponent;
  let fixture: ComponentFixture<SkillsheaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SkillsheaderComponent]
    });
    fixture = TestBed.createComponent(SkillsheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
