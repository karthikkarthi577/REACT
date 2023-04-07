import React from "react";
import { useEffect } from "react";

const Customhook = (data) => {
  useEffect(() => {
    document.title = `title count${data}`;
  }, [data]);
  return <div>Customhook</div>;
};

export default Customhook;
