import { useState } from "react";
import styles from "../Styles/Main.module.css";
import { IMAGE_ALT, IMAGE } from "../Material/spotify";
import Search from "./Search";
import Playlist from "./Playlist";
import SongCard from "./Songcard";

export default function Main({ token, setToken }) {
  const [results, setResults] = useState([]);
  const [playlist, setPlaylist] = useState([]);

  const addToPlaylist = (id) => {
    const track = results.find((track) => track.id === id);

    const duplicate = playlist.find((track) => track.id === id);

    if (!duplicate) {
      setResults((prev) => prev.filter((track) => track.id !== id));
      setPlaylist((prev) => [...prev, track]);
    }
  };

  const removeFromPlaylist = (id) => {
    setPlaylist((prev) => prev.filter((track) => track.id !== id));
    console.log(playlist);
  };

  const handleClick = () => {
    setToken("");
    window.localStorage.removeItem("token");
  };

  return (
    <>
      <nav className={styles.navBar}>
        <img src={IMAGE} alt={IMAGE_ALT} className={styles.logo} />
        <button className={styles.logOut} onClick={handleClick}>
          Log Out
        </button>
      </nav>
      <div className={styles.container}>
        <div className={styles.content}>
          <Search token={token} setResults={setResults} />
          <ul>
            {results.map((result) => (
              <SongCard
                result={result}
                forSearching={true}
                handleClick={addToPlaylist}
              />
            ))}
          </ul>
        </div>
        <div className={styles.content}>
          <Playlist token={token} playlist={playlist} />
          <ul>
            {playlist.map((result) => (
              <SongCard
                result={result}
                forSearching={false}
                handleClick={removeFromPlaylist}
              />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
