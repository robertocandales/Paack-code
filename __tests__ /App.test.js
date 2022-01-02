import React from 'react';
import { render } from '@testing-library/react-native';
import App from '../App';

let component;

describe('<App />', () => {
  beforeEach(() => {
    component = render(<App />);
  });
  it('It render with success', () => {
    console.log(component);
  });
});
