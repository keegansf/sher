import React from "react";
import { withRouter } from "react-router-dom";
import "./menu-item-styles.scss";

const MenuItem = ({
  title,
  imageUrl,
  size,
  history,
  description,
  contentSize,
  linkUrl,
  match
}) => (
  <div
    className={`${size} menu-item`}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <div
      className="background-image"
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
    <div className={`${contentSize} content`}>
      <h1 className="title">
        {title.toUpperCase()}
        <br></br>—
      </h1>
      <p>{description}</p>
      <span className="subtitle">SHOP</span>
    </div>
  </div>
);

export default withRouter(MenuItem);
