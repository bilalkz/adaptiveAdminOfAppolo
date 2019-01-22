import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";

//Parent Layouts
import AuthLayout from "layouts/Auth/Auth.jsx";
import AdminLayout from "layouts/Admin/Admin.jsx";

//Deafult CSS files
import "bootstrap/dist/css/bootstrap.css";
import "assets/scss/paper-dashboard.scss";
import "assets/demo/demo.css";
import 'react-notifications/lib/notifications.css';
import 'react-virtualized/styles.css'
//Store
import { store, persistor } from './configureStore';

//Persist
import { PersistGate } from 'redux-persist/integration/react'

//Provider
import { Provider } from 'react-redux'

import { NotificationContainer } from 'react-notifications';
import { ConnectedRouter } from 'connected-react-router'
import App from './App';
import moment from 'moment'
import momentLocalizer from "react-widgets-moment";
import 'react-widgets/dist/css/react-widgets.css';
import "react-table/react-table.css";

momentLocalizer(moment)

const hist = createBrowserHistory();
ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
        <ConnectedRouter history={hist}>
          <App/>
        </ConnectedRouter>
      <NotificationContainer />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
