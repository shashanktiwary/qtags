import { TestBed } from '@angular/core/testing';

import { PlayerQuizService } from './player-quiz.service';

describe('PlayerQuizService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlayerQuizService = TestBed.get(PlayerQuizService);
    expect(service).toBeTruthy();
  });
});
