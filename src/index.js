import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './routes/App';

const appContainer = document.getElementById('app');

const root = ReactDOM.createRoot(appContainer);

root.render(<App />);
