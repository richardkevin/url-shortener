import React from "react";

function Url({ input }) {
  const shortened = `http://kev.in/${input}`;
  return <div>{shortened}</div>;
}

Url.defaultProps = {
  input: "",
};
export default Url;
