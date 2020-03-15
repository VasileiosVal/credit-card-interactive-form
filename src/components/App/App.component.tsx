import React from "react";
import { Card } from "../Card/Card.component";
import { Form } from "../Form/Form.component";
import styles from "./App.module.scss";

export const App: React.FC = () => (
  <div className={styles.appContainer}>
    <div className={styles.cardContainer}>
      <Card />
      <Form />
    </div>
  </div>
);
