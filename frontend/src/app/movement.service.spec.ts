import {TestBed} from '@angular/core/testing';

import {MovementService} from './movement.service';

describe('MovementService', () => {
  let service: MovementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get movement types', () => {
    expect(service.getMovementsTypes().length).toEqual(6);
  });

  it('should get movements', () => {
    expect(service.getMovements('e60957d5-059a-4865-b013-5c4224a42ba2').length).toEqual(10);
  });
});
