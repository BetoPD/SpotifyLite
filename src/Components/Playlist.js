import { useState } from "react";
import styles from "../Styles/Playlist.module.css";
import { USER_ID_ENDPOINT } from "../Material/spotify";

export default function Playlist({ token, playlist }) {
  const [name, setName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (playlist.length === 0) return;

    const userProfile = await fetch(USER_ID_ENDPOINT, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const userData = await userProfile.json();
    const userID = userData.id;

    const response = await fetch(
      `https://api.spotify.com/v1/users/${userID}/playlists`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          description: "Created using Spotify's web API",
          public: "false",
        }),
      }
    );

    const playlistData = await response.json();
    const playlistId = playlistData.id;

    const uris = playlist.map((track) => track.uri);
    const createData = fetch(
      `https://api.spotify.com/v1/playlists/${playlistId}/tracks`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ uris: uris, position: 0 }),
      }
    );

    if (createData.ok) {
      console.log("Playlist created");
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          onChange={(e) => setName(e.target.value)}
          required
          value={name}
          type="text"
          placeholder="type a playlist name"
          className={styles.input}
        />
        <button type="submit" className={styles.button}>
          Create
        </button>
      </form>
    </>
  );
}
