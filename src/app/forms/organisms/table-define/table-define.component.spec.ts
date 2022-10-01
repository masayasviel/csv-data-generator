import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableDefineComponent } from './table-define.component';

describe('TableDefineComponent', () => {
  let component: TableDefineComponent;
  let fixture: ComponentFixture<TableDefineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableDefineComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TableDefineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
