import React from "react";

export default function Cell({ id, className, event, bgColor }) {
  return <div onClick={event} id={id} style={{backgroundColor: `${bgColor}`}} className={className}></div>;
}
