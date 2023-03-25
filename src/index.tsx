import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './app';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
import * as ReactDOMClient from 'react-dom/client';

import App from './app';

const rootElement = document.getElementById('root');

// Create *and* render a root with hydration.
// const root = ReactDOMClient.render(container, <App tab="home" />);
const root = ReactDOMClient.createRoot(rootElement);
root.render(<App callback={() => console.log('renderered')} />);
// Unlike with createRoot, you don't need a separate root.render() call here
