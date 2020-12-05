import "./Sidebar.css";
import React from "react";
import SidebarOption from "./SidebarOption";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import CreateIcon from "@material-ui/icons/Create";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <div className="sidebar__info">
          <h2>Ibrahim Ali</h2>
          <h3>
            <FiberManualRecordIcon />
            _heemo_
          </h3>
        </div>
        <CreateIcon />
        <SidebarOption />
      </div>
    </div>
  );
}

export default Sidebar;
