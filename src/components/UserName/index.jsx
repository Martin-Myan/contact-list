import React, { useState } from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";

import EditContact from "../EditContact";

import { ReactComponent as Back } from "../../icons/back.svg";
import { ReactComponent as Gmail } from "../../icons/gmail.svg";
import { ReactComponent as Call } from "../../icons/telephone.svg";

import { deleteContact } from "../../store/actions";

import styles from "./UserName.module.scss";

const UserName = ({ item, callBtn, emailBtn }) => {
  const [editPosition, setEditPosition] = useState(false);
  const [contactPosition, setContactPosition] = useState(false);

  const { id, name, email, number } = item;

  const ContactInfo = () => {
    setContactPosition(!contactPosition);
  };

  const editHandler = () => {
    setEditPosition(!editPosition);
  };

  const dispatch = useDispatch();

  const deleteHandler = (id) => {
    dispatch(deleteContact(id));
  };

  const contactTitle = name.slice(0, 1);

  const renderBigItems = () => {
    return editPosition ? (
      <EditContact cancleEdit={editHandler} fields={item} />
    ) : (
      <div className={styles.contact_info}>
        <div className={styles.contact_info__backEdit}>
          <Back
            type="button"
            onClick={ContactInfo}
            className={styles.contact_info__backEdit__back}
          />
          <button
            onClick={editHandler}
            className={styles.contact_info__backEdit__edit}
          >
            Edit
          </button>
        </div>
        <div className={styles.contact_info__titleBlock}>
          <h1 className={styles.contact_info__titleBlock__title}>
            {contactTitle}
          </h1>
        </div>
        <p className={styles.contact_info__name}>{name}</p>
        <div className={styles.contact_info__btns}>
          <button
            className={styles.contact_info__btns__callBtn}
            onClick={callBtn}
          >
            <Call className={styles.contact_info__btns__callBtn__iconCall} />
            Call
          </button>
          <button
            className={styles.contact_info__btns__emailBtn}
            onClick={emailBtn}
          >
            <Gmail className={styles.contact_info__btns__emailBtn__iconEmail} />
            Email
          </button>
        </div>
        <div className={styles.contact_info__tablick}>
          <div className={styles.contact_info__tablick__item}>
            <span className={styles.contact_info__tablick__item__title}>
              Phone Number
            </span>
            <p className={styles.contact_info__tablick__item__info}>{number}</p>
          </div>
          <div className={styles.contact_info__tablick__item}>
            <span className={styles.contact_info__tablick__item__title}>
              Email
            </span>
            <p className={styles.contact_info__tablick__item__info}>{email}</p>
          </div>
        </div>
        <div className={styles.contact_info__deleteBlock}>
          <button
            className={styles.contact_info__deleteBlock__btn}
            onClick={() => deleteHandler(id)}
          >
            Delete Contact
          </button>
        </div>
      </div>
    );
  };

  return contactPosition ? (
    renderBigItems()
  ) : (
    <div type="button" onClick={ContactInfo} className={styles.contact}>
      <h2 className={styles.contact__name}>{name} </h2>
    </div>
  );
};

UserName.defaultProps = {
  index: undefined,
  callBtn: () => {},
  emailBtn: () => {},
};

UserName.propTypes = {
  index: PropTypes.number,
  callBtn: PropTypes.func,
  emailBtn: PropTypes.func,
};

export default UserName;
