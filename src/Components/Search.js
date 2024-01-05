import React, { useState } from "react";
import styles from "../Styles/Search.module.css";
import { SEARCH_ENPOINT } from "../Material/spotify";

export default function Search({ token, setResults }) {
  const [search, setSearch] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(SEARCH_ENPOINT + `q=${search}&type=track`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const result = await response.json();
    setResults(result.tracks.items);
    console.log(result.tracks.items);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          onChange={(e) => setSearch(e.target.value)}
          required
          value={search}
          type="text"
          placeholder="type a song"
          className={styles.input}
        />
        <button type="submit" className={styles.button}>
          Search
        </button>
      </form>
    </>
  );
}
