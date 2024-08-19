import React from "react";
import "./Tag.css";
const Tag = (props) => {
  return (
    <sapn className="tag" style={{ backgroundColor: `${props?.color}` }}>
      {props?.tagName}
    </sapn>
  );
};

export default Tag;
