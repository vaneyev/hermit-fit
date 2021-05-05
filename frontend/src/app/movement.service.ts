import {Injectable} from '@angular/core';

interface MovementLevel {
  readonly order: number;
  readonly title: string;
}

interface MovementType {
  readonly order: number;
  readonly title: string;
  readonly steps: MovementLevel[];
}

export type MovementTypes = ReadonlyArray<MovementType>;

const movementTypes: MovementTypes = [
  {
    order: 1,
    title: 'Pushups',
    steps: [
      {
        order: 1,
        title: 'Wall pushups'
      },
      {
        order: 2,
        title: 'Incline pushups'
      },
      {
        order: 3,
        title: 'Kneeling pushups'
      },
      {
        order: 4,
        title: 'Half pushups'
      },
      {
        order: 5,
        title: 'Full pushups'
      },
      {
        order: 6,
        title: 'Close pushups'
      },
      {
        order: 7,
        title: 'Uneven pushups'
      },
      {
        order: 8,
        title: 'Half one-arm pushups'
      },
      {
        order: 9,
        title: 'Lever pushups'
      },
      {
        order: 10,
        title: 'One-arm pushups'
      },
    ]
  },
  {
    order: 2,
    title: 'Squats',
    steps: [
      {
        order: 1,
        title: 'Shoulderstand squats'
      },
      {
        order: 2,
        title: 'Jackknife squats'
      },
      {
        order: 3,
        title: 'Supported squats'
      },
      {
        order: 4,
        title: 'Half squats'
      },
      {
        order: 5,
        title: 'Full squats'
      },
      {
        order: 6,
        title: 'Close squats'
      },
      {
        order: 7,
        title: 'Uneven squats'
      },
      {
        order: 8,
        title: 'Half one-leg squats'
      },
      {
        order: 9,
        title: 'Assisted one-leg squats'
      },
      {
        order: 10,
        title: 'One-leg squats'
      },
    ]
  },
  {
    order: 3,
    title: 'Pullups',
    steps: [
      {
        order: 1,
        title: 'Vertical pulls'
      },
      {
        order: 2,
        title: 'Horizontal pulls'
      },
      {
        order: 3,
        title: 'Jackknife pullups'
      },
      {
        order: 4,
        title: 'Half pullups'
      },
      {
        order: 5,
        title: 'Full pullups'
      },
      {
        order: 6,
        title: 'Close pullups'
      },
      {
        order: 7,
        title: 'Uneven pullups'
      },
      {
        order: 8,
        title: 'Half one-arm pullups'
      },
      {
        order: 9,
        title: 'Assisted one-arm pullups'
      },
      {
        order: 10,
        title: 'One-arm pullups'
      },
    ]
  },
  {
    order: 4,
    title: 'Leg raises',
    steps: [
      {
        order: 1,
        title: 'Knee tucks'
      },
      {
        order: 2,
        title: 'Flat knee raises'
      },
      {
        order: 3,
        title: 'Flat bent leg raises'
      },
      {
        order: 4,
        title: 'Flat frog raises'
      },
      {
        order: 5,
        title: 'Flat straight leg raises'
      },
      {
        order: 6,
        title: 'Hanging knee raises'
      },
      {
        order: 7,
        title: 'Hanging bent leg raises'
      },
      {
        order: 8,
        title: 'Hanging frog raises'
      },
      {
        order: 9,
        title: 'Partial straight leg raises'
      },
      {
        order: 10,
        title: 'Hanging straight leg raises'
      },
    ]
  },
  {
    order: 5,
    title: 'Bridges',
    steps: [
      {
        order: 1,
        title: 'Short bridges'
      },
      {
        order: 2,
        title: 'Straight bridges'
      },
      {
        order: 3,
        title: 'Angled bridges'
      },
      {
        order: 4,
        title: 'Head bridges'
      },
      {
        order: 5,
        title: 'Half bridges'
      },
      {
        order: 6,
        title: 'Full bridges'
      },
      {
        order: 7,
        title: 'Wall walking bridges (Down)'
      },
      {
        order: 8,
        title: 'Wall walking bridges (Up)'
      },
      {
        order: 9,
        title: 'Closing bridges'
      },
      {
        order: 10,
        title: 'Stand-to-stand bridges'
      },
    ]
  },
  {
    order: 6,
    title: 'Handstand pushups',
    steps: [
      {
        order: 1,
        title: 'Wall headstands'
      },
      {
        order: 2,
        title: 'Crow stands'
      },
      {
        order: 3,
        title: 'Wall handstands'
      },
      {
        order: 4,
        title: 'Half headstand pushups'
      },
      {
        order: 5,
        title: 'Handstand pushups'
      },
      {
        order: 6,
        title: 'Close handstand pushups'
      },
      {
        order: 7,
        title: 'Uneven handstand pushups'
      },
      {
        order: 8,
        title: 'Half one-arm handstand pushups'
      },
      {
        order: 9,
        title: 'Lever handstand pushups'
      },
      {
        order: 10,
        title: 'One-arm handstand pushups'
      },
    ]
  },
];

@Injectable({
  providedIn: 'root'
})
export class MovementService {
  getMovementsTypes(): readonly MovementType[] {
    return movementTypes;
  }
}
