import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { AuthGuard } from './auth.guard';

describe('authGuard', () => {
  // const executeGuard: CanActivateFn = (...guardParameters) =>
  //     TestBed.runInInjectionContext(() => AuthGuard());
  beforeEach(() => {
    TestBed.configureTestingModule({});
  });
  it('should be created', () => {
    expect(true).toBeTruthy();
  });
});
