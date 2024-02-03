import React from 'react';
import Navigation from './src/routes/Navigation';
import { store } from './src/Redux/store';
import { Provider } from 'react-redux';

export default function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider> 
  );
}
