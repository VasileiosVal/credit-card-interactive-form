import React from "react";
import "./App.styles.scss";

export const App: React.FC = () => (
  <div className="app-container">
    <div className="card-container">
      <div className="card-placeholder img1"></div>
      <div className="card-form">
        <div className="form-group">
          <label htmlFor="Card Number">Card Number</label>
          <input className="input-element hover-faint" type="text" value="" />
        </div>
        <div className="form-group">
          <label htmlFor="Card Holder">Card Holder</label>
          <input className="input-element hover-faint" type="text" value="" />
        </div>
        <div className="inline-form-group">
          <div className="outer-select-group">
            <label htmlFor="Expiration Date">Expiration Date</label>
            <div className="inner-select-group">
              <select
                className="select-element hover-faint"
                value="month"
                name=""
                id=""
              >
                <option value="">Month</option>
              </select>
              <select
                className="select-element hover-faint"
                value="day"
                name=""
                id=""
              >
                <option value="">Year</option>
              </select>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="CVV">CVV</label>
            <input className="input-element hover-faint" type="text" value="" />
          </div>
        </div>
        <div className="submit-group">
          <button className="submit-button hover-faint">Submit</button>
        </div>
      </div>
    </div>
  </div>
);
