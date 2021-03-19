import React, { useState } from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import shortid from "shortid";

import { editContact, deleteContact } from "../../store/actions";

import styles from "./EditContact.module.scss";

const EditContact = ({ fields, cancleEdit }) => {
  const [change, setChange] = useState(false);

  const { id, name, number, email } = fields;

  const [newValues, setNewValues] = useState({
    id: shortid.generate(),
    name,
    email,
    number,
  });

  const dispatch = useDispatch();

  const deleteHandler = (id) => {
    dispatch(deleteContact(id));
  };

  const changeValueHandler = (key, { target }) => {
    const { value } = target;
    setNewValues({ ...newValues, [key]: value });
    setChange(true);
  };

  const submitValueHandler = () => {
    dispatch(editContact(newValues, id));
    cancleEdit();
  };

  return (
    <div className={styles.edit_page}>
      <div className={styles.edit_page__header}>
        <button
          className={styles.edit_page__header__cancle}
          onClick={cancleEdit}
        >
          Cancl
        </button>
        <button
          disabled={!change}
          onClick={submitValueHandler}
          className={
            change
              ? styles.edit_page__header__save
              : styles.edit_page__header__disabled
          }
        >
          Ok
        </button>
      </div>
      <div className={styles.edit_page__change_values}>
        <input
          type="text"
          value={newValues.name}
          onChange={(e) => changeValueHandler("name", e)}
          className={styles.edit_page__change_values__changeLine}
        />
        <input
          type="number"
          value={newValues.number}
          onChange={(e) => changeValueHandler("number", e)}
          className={styles.edit_page__change_values__changeLine}
        />
        <input
          type="email"
          value={newValues.email}
          onChange={(e) => changeValueHandler("email", e)}
          className={styles.edit_page__change_values__changeLine}
        />
      </div>
      <div className={styles.edit_page__delete}>
        <button
          onClick={() => deleteHandler(id)}
          className={styles.edit_page__delete__btn}
        >
          Delete Contact
        </button>
      </div>
    </div>
  );
};

EditContact.defaultProps = {
  fields: {},
  cancleEdit: () => {},
};

EditContact.propTypes = {
  fields: PropTypes.object,
  cancleEdit: PropTypes.func,
};

export default EditContact;
