import React, { useState /*, useEffect*/ } from "react";
import PropTypes from "prop-types";

import { ReactComponent as Add } from "../../icons/plus.svg";

import UploadPhoto from "../UploadPhoto/index";
// import ContactSaved from "../ContactSaved";

import styles from "./AddContact.module.scss";

const AddContact = ({
  id,
  name,
  email,
  number,
  disabled,
  doneClick,
  nameChange,
  emailChange,
  buttonStyles,
  numberChange,
}) => {
  const [addCotact, setAddContact] = useState(false);
  const addNewContact = () => {
    setAddContact(!addCotact);
  };

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     if (addCotact) {
  //       setInterval(() => {
  //         setAddContact(!addCotact);
  //       });
  //     }
  //   }, 1000);
  //   return () => clearInterval(interval);
  // });

  const savedNewContact = () => {
    setAddContact(!addCotact);
  };

  return addCotact ? (
    <section className={styles.add_contact} key={id}>
      <div className={styles.add_contact__btns}>
        <button
          onClick={addNewContact}
          className={styles.add_contact__btns__cancle}
        >
          Cancle
        </button>
        <p className={styles.add_contact__btns__title}>New Contact</p>
        <button
          disabled={disabled}
          onClick={() => {
            doneClick();
            addNewContact();
          }}
          className={buttonStyles}
        >
          Done
        </button>
        {/* {addCotact ? <ContactSaved name={name} /> : null} */}
      </div>

      <UploadPhoto />

      <div className={styles.add_contact__registerBlock}>
        <input
          type="text"
          value={name}
          placeholder="Name"
          onChange={nameChange}
          className={styles.add_contact__registerBlock__register}
        />
        <input
          type="number"
          value={number}
          placeholder="Number"
          onChange={numberChange}
          className={styles.add_contact__registerBlock__register}
        />
        <input
          type="email"
          value={email}
          placeholder="Email"
          onChange={emailChange}
          className={styles.add_contact__registerBlock__register}
        />
      </div>
    </section>
  ) : (
    <button onClick={savedNewContact} className={styles.add_btn}>
      <Add />
    </button>
  );
};

AddContact.defaultProps = {
  id: "",
  name: "",
  email: "",
  disabled: "",
  buttonStyles: "",
  number: undefined,
  doneClick: () => {},
  nameChange: () => {},
  emailChange: () => {},
  numberChange: () => {},
};

AddContact.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  email: PropTypes.string,
  number: PropTypes.number,
  disabled: PropTypes.bool,
  doneClick: PropTypes.func,
  nameChange: PropTypes.func,
  emailChange: PropTypes.func,
  numberChange: PropTypes.func,
  buttonStyles: PropTypes.string,
};

export default AddContact;
