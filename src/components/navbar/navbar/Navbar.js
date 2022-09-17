import React, { useEffect } from "react";
import { useState } from "react";
import Header from "../header/Header";

function Navbar() {
  let [query, setquery] = useState([]);
  let [searchapi, setsearchapi] = useState([]);
  let [inputval, setinputval] = useState("");

  useEffect(() => {
    let fetchdata = () => {
      fetch("http://localhost:3007/Post")
        .then((res) => res.json())
        .then((data) => {
          setquery(data);
          setsearchapi(data);
        });
    };
    fetchdata();
  }, [setsearchapi]);

  let keys=["title","text"]
  const handlefilter = (e) => {
    if ((e.target.value === '')) {
      setquery(searchapi);
    } else {
      let filterres = searchapi.filter((item) =>
       keys.some(key=>item[key].includes(e.target.value.toLowerCase()))
      );
      setquery(filterres);
    }
    setinputval(e.target.value);
  };
  let handleclear=()=>{
    setinputval("")
  }

  return (
    <div>
      <button type="">&#128270;</button>
      <input
        type="search"
        placeholder="search post"
        onInput={(e) => handlefilter(e)}
        value={inputval}
      />
      <button type="submit" onClick={handleclear}>X</button>
      <Header/>

      {query.map((items,key ) => {
        return (
          <React.Fragment key={key}>
            <h1>{items.title}</h1>
            <p>{items.text}</p>
          </React.Fragment>
        );
      })}
    </div>
  );
}

export default Navbar;
