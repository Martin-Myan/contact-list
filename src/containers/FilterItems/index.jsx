import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { SearchBlock } from "../../components";

import { contactsState } from "../../store/selectors";
import { filterContactList } from "../../store/actions";

import styles from "../../components/SearchBlock/Search.module.scss";

const FilterItems = () => {
  const dispatch = useDispatch();

  const contactsList = useSelector(contactsState);

  const handleOnChangeInput = (e) => {
    e.target.value.trim();
    dispatch(filterContactList(e.target.value));
  };

  return (
    <section className={styles.searchContainer}>
      <SearchBlock
        onChange={handleOnChangeInput}
        placeholder={`${contactsList.length} contacts`}
      />
    </section>
  );
};

export default FilterItems;
