import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './actions';

export const add = (x, y) => {
  return x + y;
}

export const toto = () => {
  return "toto";
}

export const minus = (x, y) => {
  return x - y;
}


function App () {
  
    const counter = useSelector(state => state.counter);
    const isLogged = useSelector(state => state.isLogged);
    const dispatch = useDispatch();

    return (
      <div>
        <p>Counter is {counter}</p>
        <button onClick={() => dispatch(increment(5))}>+</button>
        <button onClick={() => dispatch(decrement(5))}>-</button>

    {isLogged ? <h3>Valuable Information I shouldn't see</h3> : '' }
      </div>
      
    )
}

export default App;
