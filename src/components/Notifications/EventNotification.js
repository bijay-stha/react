import React from "react";
import moment from "moment";
import { Card } from "@material-ui/core";
import "./notifications.css";
function EventNotification({ programs }) {
  let comtoday = moment(new Date()).format("L");
  let comevent = moment(programs.eventDate.toDate()).format("L");

  if (comevent > comtoday || comevent === comtoday) {
    return (
      <Card className="notification-card-div-birthday-list">
        <div className="notification-card-event-list-div">
          <div className="notification-img-div">
            <img className="notification-img" src={programs.eventurl} alt="" />{" "}
          </div>
          <div className="notification-event-detail">
            <span className="notification-card-event-title">
              {programs.eventTitle}
            </span>
            <span className="notification-card-event-title-details">
              {moment(programs.eventDate.toDate()).format("LL")}
            </span>
            <span className="notification-card-event-details">
              {programs.eventDetails}
            </span>
          </div>
        </div>
      </Card>
    );
  } else {
    return null;
  }
}

export default EventNotification;
