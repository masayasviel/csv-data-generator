import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnTypeFormComponent } from './column-type-form.component';

describe('ColumnTypeFormComponent', () => {
  let component: ColumnTypeFormComponent;
  let fixture: ComponentFixture<ColumnTypeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ColumnTypeFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ColumnTypeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
