import React from "react";
import { PlayCircleFilled } from "@material-ui/icons";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

import { Header } from "..";
import { SongRow } from "../../components";
import { useDataLayerValue } from "../../DataLayer";
import "./Body.scss";

interface IProps {
  spotify: any;
}
const Body = (props: IProps) => {
  const { spotify } = props;
  const {
    state: { discover_weekly }
  }: any = useDataLayerValue();
  return (
    <div className="body">
      <Header spotify={spotify} />
      <div className="body__info">
        <img src={discover_weekly?.images[0].url} alt="" />
        <div className="body__infoText">
          <strong>PLAYLIST</strong>
          <h2>Discover Weekly</h2>
          <p>{discover_weekly?.description}</p>
        </div>
      </div>
      <div className="body__songs">
        <div className="body__icons">
          <PlayCircleFilled className="body__shuffle" />
          <FavoriteIcon fontSize="large" />
          <MoreHorizIcon />
        </div>
        {/* List of songs */}
        {discover_weekly?.tracks.items.map((item: any, i: number) => {
          return <SongRow key={i} track={item.track} index={i} />;
        })}
      </div>
    </div>
  );
};

export default Body;
