import { useReducer, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { initialState, reducer, createInstance } from './store/store';
import MathCalculator from './components/MathCalculator';
import Form from "./form/form";
import Todo from './form/Todo'

function App() {
  // const [state, dispatch] = useReducer(reducer, createInstance());
  // const handleArtir = () => {
  //   dispatch({ type: 'increment' });
  // };
  // const handleAzalt = () => {
  //   dispatch({ type: 'decrement' });
  // };
  // const handleCustom = () => {
  //   dispatch({ type: 'custom', payload: 10 });
  // };
  return (
    <>
      {/* <p>{state.count}</p>
      <button onClick={() => handleArtir()}>Artir</button>
      <button onClick={() => handleAzalt()}>Azalt</button>
      <button onClick={() => handleCustom()}>Custom</button>
      <MathCalculator count={state.count} dispatch={dispatch} />


      <Form /> */}
      <Todo/>
    </>
  );
}

export default App;
