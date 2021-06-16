import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import { Avatar } from "@material-ui/core";

import "./Header.scss";
import { useDataLayerValue } from "../../DataLayer";

interface IProps {
  spotify: any;
}
const Header = (props: IProps) => {
  const { spotify } = props;
  const {
    state: { user }
  }: any = useDataLayerValue();
  return (
    <div className="header">
      <div className="header__left">
        <SearchIcon />
        <input type="text" placeholder="Search for Artists, Songs," />
      </div>
      <div className="header__right">
        <Avatar src={user?.images[0]?.url} alt={user?.display_name} />
        <h4>{user?.display_name}</h4>
      </div>
    </div>
  );
};

export default Header;
