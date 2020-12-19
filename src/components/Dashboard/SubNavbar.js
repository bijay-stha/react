import React from "react";
import { Divider } from "@material-ui/core";

export default function SubNavbar({ title, content }) {
  return (
    <div>
      <div className="sub_navbar_div">
        <div className="sub_navbar_list">
          <span className="sub_navbar_list_title ">{title}</span>
          <span className="sub_navbar_list_title_arrow"> {">"} </span>
          <span className="sub_navbar_list_subtitle"> {content}</span>
        </div>
      </div>
      <Divider className="sub_navbar_divider" />
    </div>
  );
}
