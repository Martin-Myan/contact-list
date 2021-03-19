import React from "react";
import { PhoneMaket } from "./components";
import { RenderItems, NewContact, FilterItems } from "./containers";

import "./App.css";

const App = () => {
  return (
    <PhoneMaket>
      <FilterItems />
      <RenderItems />
      <NewContact />
    </PhoneMaket>
  );
};

export default App;
