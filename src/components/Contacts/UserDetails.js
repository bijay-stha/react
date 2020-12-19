import { Divider } from "@material-ui/core";
import React from "react";
import "./contact.css";

const UserDetails = ({ user }) => {
  return (
    <div>
      <div style={{ display: "flex" }}>
        <img src={user.photoURL} alt="" className="userdetail-img" />
        <div className="user-detail-name-post-div">
          <span className="userdetail-name">{user.fullName}</span>
          <span className="userdetail-post">{user.Post}</span>
        </div>
      </div>
      <div style={{ paddingTop: "20px" }}>
        <span className="userdetail-phone-title">Phone Details</span>
        <div style={{ display: "flex", paddingLeft: "10px" }}>
          <Divider
            style={{ backgroundColor: "red", width: "128px", height: "2px" }}
          />
          <Divider style={{ width: "402px", height: "2px" }} />
        </div>
        <div style={{ display: "flex" }}>
          <span className="user-detail-workphone-title">Work Phone:</span>
          <span
            className="user-detail-workphone"
            style={{ paddingLeft: "140px" }}
          >
            +977-{user.WorkPhone}
          </span>
        </div>
        <div style={{ display: "flex" }}>
          <span className="user-detail-workphone-title">Personal Phone:</span>
          <span
            className="user-detail-workphone"
            style={{ paddingLeft: "106px" }}
          >
            +977-{user.PersonalPhone}
          </span>
        </div>
        <span className="userdetail-phone-title">Email Details</span>
        <div style={{ display: "flex", paddingLeft: "10px" }}>
          <Divider
            style={{ backgroundColor: "red", width: "124px", height: "2px" }}
          />
          <Divider style={{ width: "406px", height: "2px" }} />
        </div>
        <div style={{ display: "flex" }}>
          <span className="user-detail-workphone-title">work Email:</span>
          <span
            className="user-detail-workphone"
            style={{ paddingLeft: "100px" }}
          >
            {user.email}
          </span>
        </div>
        <div style={{ display: "flex" }}>
          <span className="user-detail-workphone-title">Personal Email:</span>
          <span
            className="user-detail-workphone"
            style={{ paddingLeft: "65px" }}
          >
            {user.personalemail}
          </span>
        </div>
        <span className="userdetail-phone-title">Address Details</span>
        <div style={{ display: "flex", paddingLeft: "10px" }}>
          <Divider
            style={{ backgroundColor: "red", width: "145px", height: "2px" }}
          />
          <Divider style={{ width: "385px", height: "2px" }} />
        </div>
        <div style={{ display: "flex" }}>
          <span className="user-detail-workphone-title">Address:</span>
          <span
            className="user-detail-workphone"
            style={{ paddingLeft: "100px" }}
          >
            {user.address}
          </span>
        </div>
        <span className="userdetail-phone-title">Date Of Birth Details</span>
        <div style={{ display: "flex", paddingLeft: "10px" }}>
          <Divider
            style={{ backgroundColor: "red", width: "190px", height: "2px" }}
          />
          <Divider style={{ width: "340px", height: "2px" }} />
        </div>
        <div style={{ display: "flex" }}>
          <span className="user-detail-workphone-title">DOB:</span>
          <span
            className="user-detail-workphone"
            style={{ paddingLeft: "210px" }}
          >
            {user.DOB_Y} / {user.DOB_M} / {user.DOB_D}
          </span>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
