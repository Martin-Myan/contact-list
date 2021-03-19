import React, { useState, useEffect } from "react";
import { ReactComponent as Battary } from "../../icons/battery-status.svg";
import { ReactComponent as WiFi } from "../../icons/wi-fi-zone.svg";

import styles from "./Header.module.scss";

const Header = () => {
  const [today, setToday] = useState(new Date());

  const hours = today.getHours();
  const minutes = today.getMinutes();

  useEffect(() => {
    setInterval(() => {
      setToday(new Date());
    }, 1000);
  }, [today]);

  return (
    <header className={styles.header}>
      <span className={styles.header__oclock}>{`${hours}:${minutes}`}</span>
      <div className={styles.header__phone}>
        <span className={styles.header__phone__glass} />
        <span className={styles.header__phone__line} />
      </div>
      <div className={styles.header__rightBlock}>
        <Battary className={styles.header__rightBlock__icon} />
        <WiFi />
      </div>
    </header>
  );
};

export default Header;
