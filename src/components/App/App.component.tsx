import React from "react";
import "./App.styles.scss";

export const App: React.FC = () => (
  <div className="app-container">
    <div className="card-container">
      <div className="card-placeholder img1"></div>
      <div className="card-form">
        <input type="text" value="one" />
        <input type="text" value="one" />
        <input type="text" value="one" />
      </div>
    </div>
  </div>
);
