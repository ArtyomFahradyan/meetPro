import React from 'react';
import ReactDOM from 'react-dom';
import { constants } from '@meet/shared';
import '@meet/assets/fonts.less';
import App from './App';
import './i18n';
import './index.less';

const startWorker = async () => {
  if (process.env.NODE_ENV === constants.DEVELOPMENT) {
    const { mockWorker } = await import('@meet/shared');
    mockWorker.start();
  }
};
startWorker();

ReactDOM.render(<App />, document.getElementById('root'));
