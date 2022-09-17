import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoiceFormsComponent } from './choice-forms.component';

describe('ChoiceFormsComponent', () => {
  let component: ChoiceFormsComponent;
  let fixture: ComponentFixture<ChoiceFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChoiceFormsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ChoiceFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
