import React from "react";

export default function Cell({ id, className, event }) {
  return <div onClick={event} id={id} className={className}></div>;
}
