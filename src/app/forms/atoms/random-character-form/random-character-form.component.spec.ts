import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomCharacterFormComponent } from './random-character-form.component';

describe('RandomCharacterFormComponent', () => {
  let component: RandomCharacterFormComponent;
  let fixture: ComponentFixture<RandomCharacterFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RandomCharacterFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RandomCharacterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
