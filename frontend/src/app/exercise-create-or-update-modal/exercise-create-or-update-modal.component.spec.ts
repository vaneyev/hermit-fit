import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseCreateOrUpdateModalComponent } from './exercise-create-or-update-modal.component';

describe('ExerciseCreateOrUpdateModalComponent', () => {
  let component: ExerciseCreateOrUpdateModalComponent;
  let fixture: ComponentFixture<ExerciseCreateOrUpdateModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExerciseCreateOrUpdateModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExerciseCreateOrUpdateModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
