import React, { useRef } from "react";
import styles from "./search_header.module.css";
const Search_header = ({ onSearch }) => {
  const inputRef = useRef();
  const hadndleSearch = () => {
    const value = inputRef.current.value;
    onSearch(value);
  };
  const onClick = () => {
    hadndleSearch();
  };
  const onKeypress = (event) => {
    if (event.key === "Enter") {
      hadndleSearch();
    }
  };
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img className={styles.img} src="/images/logo.png" alt="logo" />
        <h1 className={styles.title}>Youtube</h1>
      </div>
      <input
        ref={inputRef}
        className={styles.input}
        type="search"
        placeholder="Search..."
        onKeyPress={onKeypress}
      />
      <button className={styles.button} type="submit" onClick={onClick}>
        <img
          className={styles.buttonImg}
          src="/images/search.png"
          alt="search"
        />
      </button>
    </header>
  );
};
// const Search_header = (props) => <h1>Header!</h1>;

export default Search_header;
