import { useEffect, useState } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import SpotifyWebApi from "spotify-web-api-js";

import "./App.scss";
import { PrivateRoute } from "./components";
import { AuthLayout, MainLayout } from "./layouts";
import { Login, Player } from "./pages";
import { routerObject, routes } from "./router";
import { getTokenFromUrl } from "./utils";
import { useDataLayerValue } from "./DataLayer";

// TODO: add private route HOC

const spotify = new SpotifyWebApi();

function App(props: any) {
  const {
    state: { user, token },
    dispatch
  }: any = useDataLayerValue();
  const authRoutes = [routes.login.path];

  // runs only once(when component mounts, not when it rerenders)
  useEffect(() => {
    // hash will be an object at this point
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;
    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        payload: _token
      });
      spotify.setAccessToken(_token);

      // dispatch action to get user
      spotify.getMe().then(user => {
        console.log("This is the user obj from spotify ", user);
        dispatch({
          type: "SET_USER",
          payload: user
        });
      });

      // dispatch action to get user playlist
      spotify.getUserPlaylists().then(playlists => {
        dispatch({
          type: "SET_PLAYLISTS",
          payload: playlists
        });
      });

      spotify.getPlaylist("3LRTP4W3zqPCI941KRpHPV").then(res => {
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          payload: res
        });
      });
    }
  }, []);
  const { location } = props;
  // console.log("User from data layer is", user);
  // console.log("token from data layer is", token);
  return (
    <div className="app">
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  );
}

export default withRouter(App);
