import React from "react";
import "./Player.scss";
import { Sidebar, Body, Footer } from "../../partials";

interface IProps {
  spotify: any;
}

const Player = (props: IProps) => {
  const { spotify } = props;
  return (
    <div className="player">
      <div className="player__body">
        <Sidebar />
        <Body spotify={spotify} />
      </div>
      <Footer />
    </div>
  );
};

export default Player;
