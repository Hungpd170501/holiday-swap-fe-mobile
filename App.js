// App.js
import React from "react";
import Navigation from "./navigations/navigationConfig";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { LogBox } from "react-native";
LogBox.ignoreAllLogs(); //Ignore all log notifications

function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}

export default App;
