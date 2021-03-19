import React from "react";
import { useSelector } from "react-redux";

import { UserName } from "../../components";
import { contactsState, filteredState, isSearch } from "../../store/selectors";

import styles from "./RenderItems.module.scss";

const RenderItems = () => {
  const contactsList = useSelector(contactsState);
  const filteredList = useSelector(filteredState);
  const isSearchValid = useSelector(isSearch);

  const validList = isSearchValid ? filteredList : contactsList;

  const returnItems = validList.map((item, index) => (
    <UserName key={item.id} item={item} index={index} />
  ));

  return <section className={styles.contact_block}>{returnItems}</section>;
};

export default RenderItems;
