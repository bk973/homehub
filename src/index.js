import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { ReactReduxFirebaseProvider } from 'react-redux-firebase'
import store, { rrfProps}  from './store/createStore'
import './index.scss';
import App from './containers/app';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Provider store={store}>
        <ReactReduxFirebaseProvider {...rrfProps}>
           <App />
        </ReactReduxFirebaseProvider>
    </Provider>

, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
