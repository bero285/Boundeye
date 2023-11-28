import React from "react";
import './People.css'
const People = (props) => {
  return (
    <div className="blog" style={{backgroundImage: `url(${props.url})`}}>
      <div className="title-box">
        <h3>სახელი: {props.name}</h3>
        <hr />
        <div className="intro">
          <b>ბედისწერა:</b> <br></br>{props.faith}
        </div>
      </div>
      <div className="info">
        <span>
          {props.description}
        </span>
      </div>
      <div className="footer">
        <div className="icon-holder">
          <span>
            <i className="fa fa-comment-o" />
            <span>ასაკი</span>
            <space />
            <i className="fa fa-calendar" />
            <span>{props.age}</span>
          </span>
        </div>
      </div>
      <div className="color-overlay" />
    </div>
  );
};

export default People;
