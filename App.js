// App.js
import React from "react";
import Navigation from "./navigations/navigationConfig";
import { LogBox } from "react-native";

LogBox.ignoreAllLogs();

function App() {
  return <Navigation />;
}

export default App;
