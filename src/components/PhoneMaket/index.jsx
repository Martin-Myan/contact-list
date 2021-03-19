import React from "react";
import PropTypes from "prop-types";

import Header from "../Header";

import styles from "../../App.module.scss";

const PhoneMaket = ({ children }) => {
  return (
    <div className={styles.phone}>
      <Header />
      <div className={styles.phone__homeBtn} />
      <div className={styles.phone__voleum} />
      <div className={styles.phone__blockBtnMin} />
      <div className={styles.phone__blockBtnMax} />
      <div className={styles.phone__block}>{children}</div>
    </div>
  );
};

PhoneMaket.defaultProps = {
  children: [],
};

PhoneMaket.propTypes = {
  children: PropTypes.array,
};

export default PhoneMaket;
