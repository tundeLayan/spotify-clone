import React from "react";
import "./SidebarOption.scss";

interface IProps {
  title: string;
  Icon?: any;
}
const SidebarOption = (props: IProps) => {
  const { title, Icon } = props;
  return (
    <div className="sidebarOption">
      {Icon && <Icon className="sidebarOption__icon" />}
      {Icon ? <h4>{title}</h4> : <p>{title}</p>}
    </div>
  );
};

export default SidebarOption;
