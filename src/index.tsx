import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './store/store';

const rootElement: HTMLElement | null = (document.getElementById('root'));

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
      <Provider store={store}>
        <App />
      </Provider> 
  );
  
} 
