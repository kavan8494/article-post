import React from "react";
import { useEffect, useState } from "react";
function Publish({ props }) {
  let [show, setshow] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3007/Post")
      .then((res)=> res.json())
      .then((data) => {
        setshow(data);
      });
  });
  return (
    <div>
      {show.map((items,key) => {
        return (
          <React.Fragment key={key}>
            <h1>NAME:{items.title}</h1>
            <h1>POST:{items.text}</h1>
          </React.Fragment>
        );
      })}
    </div>
  );
}

export default Publish;
