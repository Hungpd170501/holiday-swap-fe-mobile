// App.js
import React from "react";
import Navigation from "./navigations/navigationConfig";
import { LogBox } from "react-native";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { ViewPropTypes } from "deprecated-react-native-prop-types";

function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}

export default App;
