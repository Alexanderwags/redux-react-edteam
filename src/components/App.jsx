import React from "react";
import "../styles/styles.scss";
import AppRoutes from "./AppRouter";
import { Provider } from "react-redux";
import store from "../components/Redux/store";
import { getCourseList } from "../components/Redux/actionCreator";

store.dispatch(getCourseList());

const App = () => (
  <Provider store={store}>
    <AppRoutes />
  </Provider>
);

export default App;
