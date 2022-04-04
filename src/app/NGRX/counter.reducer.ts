import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset } from './counter.action';

export const initialState = 0;

const _counterReducer = createReducer(
  initialState,
  on(increment, (state: number) => state + 1),
  on(decrement, (state: number) => state - 1),
  on(reset, (state: any) => 0)
);

export function counterReducer(state: any, action: any) {
  return _counterReducer(state, action);
}