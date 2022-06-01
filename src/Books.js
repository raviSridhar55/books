import React from "react";

const Books = ({ data }) => {
  console.log(data);
  return (
    <div>
      {data.map((d) => (
        <h1>{d.title}</h1>
      ))}
    </div>
  );
};

export default Books;
