import React from "react";
import PropTypes from "prop-types";

import { ReactComponent as Search } from "../../icons/search.svg";

import styles from "./Search.module.scss";

const SearchBlock = ({ onChange, placeholder }) => {
  return (
    <div className={styles.searchContainer__searchBlock}>
      <Search className={styles.searchContainer__searchBlock__icon} />
      <input
        type="text"
        onChange={onChange}
        placeholder={placeholder}
        className={styles.searchContainer__searchBlock__search}
      />
    </div>
  );
};

SearchBlock.defaultProps = {
  placeholder: "",
  onChange: () => {},
};

SearchBlock.propTypes = {
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
};

export default SearchBlock;
