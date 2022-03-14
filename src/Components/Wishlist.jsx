import React, { useState } from "react";

export const Wishlist = () => {
  const [query, setQuery] = React.useState("");
  const [count, setCount] = React.useState(0);
  const [wish, setWish] = React.useState([]);

  const handleChange = (event) => {
    const { value } = event.target;
    setQuery(value);
  };

  const addItems = () => {
    let a = [...wish, query];
    setWish(a);
    setCount(count + 1);
  };

  if (count > 3) {
    return <h1>You cannot add more than 3 items to wishlist</h1>;
  }

  return (
    <div>
      <h1>Wishlist</h1>
      <input
        type="text"
        placeholder="Add Your Wishlist Items"
        onChange={handleChange}
        value={query}
      />
      <button onClick={query === "" ? null : addItems}>ADD</button>

      {wish.map((el, i) => {
        return <div key={i}>{el}</div>;
      })}
    </div>
  );
};
