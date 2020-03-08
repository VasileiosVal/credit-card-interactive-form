import React from "react";
import "./App.styles.scss";

export const App: React.FC = () => (
  <div className="app-container">
    <div className="card-container">
      <div className="card-placeholder img1"></div>
      <div className="card-form">
        <div className="form-group">
          <label htmlFor="Card Number">Card Number</label>
          <input className="input-element" type="text" value="number" />
        </div>
        <div className="form-group">
          <label htmlFor="Card Holder">Card Holder</label>
          <input className="input-element" type="text" value="holder" />
        </div>
        <div className="inline-form-group">
          <div className="outer-select-group">
            <label htmlFor="Card Holder">Card Holder</label>
            <div className="inner-select-group">
              <select className="select-element" value="month" name="" id="">
                <option value="">hello</option>
              </select>
              <select className="select-element" value="day" name="" id="">
                <option value="">hello</option>
              </select>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="Card Number">Card Number</label>
            <input className="input-element" type="text" value="one" />
          </div>
        </div>
        <div className="submit-group">
          <button className="submit-button">Submit</button>
        </div>
      </div>
    </div>
  </div>
);
