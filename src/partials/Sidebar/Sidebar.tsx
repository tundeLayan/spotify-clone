import React from "react";

import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";

import { SidebarOption } from "../../components";
import "./Sidebar.scss";
import { useDataLayerValue } from "../../DataLayer";

function Sidebar() {
  const {
    state: { playlists }
  }: any = useDataLayerValue();
  return (
    <div className="sidebar">
      <img
        className="sidebar__logo"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
      />
      <SidebarOption title="Home" Icon={HomeIcon} />
      <SidebarOption title="Search" Icon={SearchIcon} />
      <SidebarOption title="Your Library" Icon={LibraryMusicIcon} />

      <strong className="sidebar__title">PLAYLISTS</strong>
      <hr />
      {/* TODO: Make the playlists render no playlist, if playlist doesnt exist */}
      {playlists?.items?.map((playlist: any, index: number) => {
        return <SidebarOption key={index} title={playlist.name} />;
      })}
    </div>
  );
}

export default Sidebar;
