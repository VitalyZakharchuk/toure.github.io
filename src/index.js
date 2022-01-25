import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import ErrorBoundery from './error/error-boundry';
import reportWebVitals from './reportWebVitals';
import TouresService from './services/toures-service';
import store from './store';
import { TouresServiceProvider } from './toures-service-context/toures-service-context';

const touresService = new TouresService();
ReactDOM.render(
  <Provider store={store}>
      
        <TouresServiceProvider value={touresService}>
          <App/>
        </TouresServiceProvider>
      
  </Provider>,
  document.getElementById('root')
);


reportWebVitals();
