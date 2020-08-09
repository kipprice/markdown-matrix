import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import './index.scss';

console.log('rendering');
ReactDOM.render(
    <div className='embedded'>
      <App />
    </div>,
  
  document.getElementById('root')
);