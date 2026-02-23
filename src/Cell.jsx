import React from "react";

export default function Cell({ key, className }) {
  return <div className={className}>{key}</div>;
}
