const SCOPES = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
  "playlist-modify-private",
  "playlist-modify-public",
  "app-remote-control",
];

const END_POINT = "https://accounts.spotify.com/authorize?";
const REDIRCT_URI = "https://spotifymin.netlify.app/";
const CLIENT_ID = "a7a78045a85148a5b3cf0dd8d583c50c";

export const URL = `${END_POINT}client_id=${CLIENT_ID}&response_type=token&redirect_uri=${REDIRCT_URI}&scope=${SCOPES.join(
  "%20"
)}&show_dialog=true`;

export const IMAGE =
  "https://upload.wikimedia.org/wikipedia/commons/8/84/Spotify_icon.svg";
export const IMAGE_ALT = "Spotify Logo";

export const SEARCH_ENPOINT = "https://api.spotify.com/v1/search?";
export const USER_ID_ENDPOINT = "https://api.spotify.com/v1/me";
