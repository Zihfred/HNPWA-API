import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import News from "./containers/News";
import configureStore from "./store";
import SelectedPost from "./containers/SelectedPost";

const store = configureStore();
ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <Switch>
        <Route exact path="/:page?" component={News} />
        <Route path="/comments/:id?" component={SelectedPost} />
        <Redirect to="/" />
      </Switch>
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
