import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { addContact } from "../../store/actions";

import { AddContact } from "../../components";

import styles from "../../components/AddContact/AddContact.module.scss";

const NewContact = () => {
  const [fields, setFields] = useState({
    id: "",
    name: "",
    email: "",
    number: undefined,
  });

  const { name, email, number, id } = fields;

  const dispatch = useDispatch();

  const renderNewItem = () => {
    dispatch(addContact(fields));
    setFields({ name: "", email: "", number: undefined, id: "" });
  };

  // useEffect(() => {
  //   if (addCotact) {
  //     setInterval(() => {
  //       setAddContact(false);
  //     }, 300);
  //   }
  // }, [addCotact]);

  // const renderNewContact = (
  //   <AddContact
  //     id={id}
  //     buttonStyles={
  //       name && number
  //         ? styles.add_contact__btns__done
  //         : styles.add_contact__btns__disabled
  //     }
  //     doneClick={renderNewItem}
  //     name={name}
  //     email={email}
  //     number={number}
  //     disabled={!name || !number}
  //     nameChange={(e) => setFields({ name: e.target.value, email, number })}
  //     emailChange={(e) => setFields({ name, email: e.target.value, number })}
  //     numberChange={(e) => setFields({ name, email, number: e.target.value })}
  //   />
  // );

  return (
    <AddContact
      id={id}
      buttonStyles={
        name && number
          ? styles.add_contact__btns__done
          : styles.add_contact__btns__disabled
      }
      doneClick={renderNewItem}
      name={name}
      email={email}
      number={number}
      disabled={!name || !number}
      nameChange={(e) => setFields({ name: e.target.value, email, number })}
      emailChange={(e) => setFields({ name, email: e.target.value, number })}
      numberChange={(e) => setFields({ name, email, number: e.target.value })}
    />
  );
};

export default NewContact;
