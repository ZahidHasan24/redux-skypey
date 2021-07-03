import React from "react";
import "./styles.css";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import store from "./redux/store";
import _ from "lodash";

export default function App() {
  const { contacts, user, activeUserId } = store.getState();
  return (
    <div className="App">
      <Sidebar contacts={_.values(contacts)} />
      <Main user={user} activeUserId={activeUserId} />
    </div>
  );
}
