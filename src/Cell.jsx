import React from "react";

export default function Cell({ id, className, event, bgColor }) {
  return <div onClick={event} id={id} style={{backgroundColor: `${bgColor}`,   boxShadow: '0.5px 0.5px 1px black'}} className={className}></div>;
}
