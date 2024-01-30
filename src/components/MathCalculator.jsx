import { useReducer, useState } from 'react';
import { createInstance, initialState, reducer } from '../store/store';

export default function MathCalculator({count , dispatch}) {
  // const [state, dispatch] = useReducer(reducer, createInstance());
  return (
    <div>
      <p>Calculator</p>
      <p>{count}</p>
    </div>
  );
}
