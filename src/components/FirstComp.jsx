import React from "react";

const FirstComp = ({ name, getData }) => {
  //   console.log(props);
  //   const { name } = props;
  const x = "Hello, World!";
  getData(x);
  return (
    <>
      <h2>My name is {name} </h2>
    </>
  );
};

export default FirstComp;
