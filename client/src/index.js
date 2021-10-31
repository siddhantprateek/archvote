import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import { CLIENT_ID, DOMAIN } from './auth/CREDENTIALS';

ReactDOM.render(
  <Auth0Provider
    domain={DOMAIN}
    clientId={CLIENT_ID}
    redirectUri={window.location.origin}
    >
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </Auth0Provider>,
  document.getElementById('root')
);

reportWebVitals();
