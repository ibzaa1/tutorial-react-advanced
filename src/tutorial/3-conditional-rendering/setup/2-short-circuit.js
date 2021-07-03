import React, { useState } from "react";
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState("");
  const [isError, setIsError] = useState(true);
  // const firstValue = text || "hello world 1";
  // const secondValue = text && "hello world 2";

  return (
    <>
      {/* <h1>{firstValue}</h1>
      <h1>{secondValue}</h1> */}

      <h1>{text || "john doe"}</h1>
      <button className='btn' onClick={() => setIsError(!isError)}>
        Toggle Error
      </button>
      {isError && <h1>Error...</h1>}
      {isError ? <p>there is an error</p> : <h2>there is no error</h2>}
    </>
  );
};

export default ShortCircuit;
