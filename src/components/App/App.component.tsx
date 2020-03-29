import React, { useContext } from "react";
import Card from "../Card/Card.component";
import Form from "../Form/Form.component";
import styles from "./App.module.scss";
import RootContext from "../../stores/rootStore";

export const App: React.FC = () => {
  const {
    infoStore: { resetGlobalHighlight }
  } = useContext(RootContext);
  return (
    <div onClick={resetGlobalHighlight} className={styles.appContainer}>
      <div className={styles.appInnerContainer}>
        <Card />
        <Form />
      </div>
    </div>
  );
};
