export const authEndpoint = "https://accounts.spotify.com/authorize";

export const redirectUri = "http://localhost:3000/";

// Move this to .env file
export const clientId = "8d9037dc4572454dad09fc2574b7b9ea";

export const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state"
];

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
