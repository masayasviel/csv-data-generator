import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FixFormComponent } from './fix-form.component';

describe('FixFormComponent', () => {
  let component: FixFormComponent;
  let fixture: ComponentFixture<FixFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FixFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FixFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
