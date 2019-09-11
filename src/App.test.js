import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { add, toto, minus } from './App';


/*
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
*/

test( 'Fake test',() => {
  expect(true).toBeTruthy();

  const isFalse = false;
  expect(isFalse).toBeFalsy();
});

test('add', () => {
  const value = add(1, 2);
  expect(value).toBe(3);
});

test('toto', () => {
  const value = toto();
  expect(value).toBe('toto');
});

test ('minus', () => {
  const value = minus(3, 1);
  expect(value).toBe(2);
})