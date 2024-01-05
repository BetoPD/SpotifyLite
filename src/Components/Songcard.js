import styles from "../Styles/Songcard.module.css";

export default function SongCard({ result, forSearching, handleClick}) {
  return (
    <li key={result.id} className={styles.card}>
      <img
        src={result.album.images[0].url}
        alt="album cover"
        className={styles.image}
      />
      <div className={styles.title}>
        <h3>{result.name}</h3>
        {result.artists.map((artist) => (
          <p>{artist.name}</p>
        ))}
      </div>
      <audio controls src={result.preview_url}>
        Your browser does not support the audio element.
      </audio>
      <button className={styles.button} onClick={() => handleClick(result.id)}>
        {forSearching ? "Add to Playlist" : "Remove"}
      </button>
    </li>
  );
}
