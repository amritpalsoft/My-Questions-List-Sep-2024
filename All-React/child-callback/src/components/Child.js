import React from "react";

function Child({ setname }) {
  return (
    <div>
      <h1>Child component</h1>
      <input type="text" onChange={(e) => setname(e.target.value)} />
    </div>
  );
}

export default Child;
