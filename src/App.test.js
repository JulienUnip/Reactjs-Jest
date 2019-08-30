import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { add, toto } from './App';


/*
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
*/

test( 'Fake test',() => {
  expect(true).toBeTruthy();
});

test('add', () => {
  const value = add(1, 2);
  expect(value).toBe(3);
});

test('toto', () => {
  const value = toto();
  expect(value).toBe('toto');
}); 