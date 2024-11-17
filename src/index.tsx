import React from 'react';
import ReactDOM from 'react-dom';
import i18n from './i18n';
import App from './App';

// Wait for i18n to be ready
i18n.on('initialized', () => {
  console.log('i18n initialized', i18n.language);
  
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );
});