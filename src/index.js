import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import store from "./redux/store";

const rootElement = document.getElementById("root");
const render = () => {
  fancyLog();
  return ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    rootElement
  );
};

render();
store.subscribe(render);

function fancyLog() {
  console.log("%c Rendered with 👉 👉👇", "background: purple; color: #fff");
  console.log(store.getState());
}
