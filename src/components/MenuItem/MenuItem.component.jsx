import React from "react";
import "./MenuItem.styles.scss";
import { withRouter } from "react-router";

const MenuItem = ({ title, imageUrl, size, linkUrl, history, match }) => {
  return (
    <div
      className={`menu-item ${size ? "size" : ""}`}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <div
        className="background"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="content">
        <h2 className="title">{title.toUpperCase()}</h2>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

export default withRouter(MenuItem);
