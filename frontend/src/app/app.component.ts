import {Component, OnInit, ViewChild} from '@angular/core';
import {Exercise, Movement, MovementService} from './movement.service';
import {NzDatePickerComponent} from 'ng-zorro-antd/date-picker';
import {v4 as uuidv4} from 'uuid';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  date: Date;
  private movementService: MovementService;
  exercises: Exercise[] = [];
  exercise: Exercise;
  comments: string;
  isModalVisible = false;
  @ViewChild('datePicker')
  datePicker: NzDatePickerComponent;

  constructor(movementService: MovementService) {
    this.movementService = movementService;
  }

  ngOnInit(): void {
    this.onCalendarChange(new Date());
  }

  getMovement(key: string): Movement {
    return this.movementService.getMovement(key);
  }

  hasExercise(date: Date): boolean {
    return this.movementService.getDaysInMonth(date).some(value => value.date.getDate() === date.getDate());
  }

  onCalendarChange(date: Date): void {
    this.date = date;
    if (!date) {
      this.comments = undefined;
      this.exercises = [];
    }
    this.comments = this.movementService.getWorkoutDayByDate(date)?.comments;
    this.exercises = this.movementService.getExercises(date);
  }

  onCreate(): void {
    this.onUpdate({
      id: uuidv4(),
      workoutDayId: '',
      movementId: '',
      isWork: true,
      set: 1,
      reps: 0
    });
  }

  onUpdate(exercise: Exercise): void {
    this.exercise = exercise;
    this.isModalVisible = true;
  }

  onOk(): void {
    this.isModalVisible = false;
  }

  onCancel(): void {
    this.isModalVisible = false;
  }
}
