import React from "react";
import PropTypes from "prop-types";

import { ReactComponent as True } from "../../icons/tick.svg";

import styles from "./ContactSaved.module.scss";

const ContactSaved = ({ name }) => {
  return (
    <section className={styles.contactSaved}>
      <True className={styles.contactSaved__icon} />
      <p className={styles.contactSaved__text}>{`Contact ${name} saved`}</p>
    </section>
  );
};

ContactSaved.defaultProps = {
  name: "",
};

ContactSaved.propTypes = {
  name: PropTypes.string,
};

export default ContactSaved;
