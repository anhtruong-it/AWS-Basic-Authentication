import React from 'react';
import App from './App';
import './index.css';
import Router from './Router';
import 'antd/dist/reset.css';
import { Amplify } from 'aws-amplify'
import config from './aws-exports'
import { createRoot } from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
Amplify.configure(config)

createRoot(document.getElementById('root')).render(<Router />);

// const root = createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

reportWebVitals();