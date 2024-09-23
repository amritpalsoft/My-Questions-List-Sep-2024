import React, { useState } from "react";
import Child from "./Child";

function Parent() {
  const [name, setname] = useState("");
  return (
    <>
      <div> Parent component : {name}</div>
      <Child setname={setname} />
    </>
  );
}
export default Parent;
