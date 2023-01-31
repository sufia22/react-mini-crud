import { useEffect } from "react";
import { useState } from "react";

const Team = () => {
  const [counter, setCounter] = useState(0);
  const [age, setAge] = useState(0);
  const [birth, setBirth] = useState(null);

  const handleAgeCheck = () => {
    const boyos = new Date().getFullYear() - age;
    setBirth(boyos);
  };

  useEffect(() => {
    console.log("Effect load");
  }, [birth, counter]);

  // handle counter decrement
  const handleCounterDec = () => {
    setCounter(counter <= 0 ? 0 : counter - 1);
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="counter">
              <h1>{counter}</h1>
              <hr />
              <button className="btn btn-danger" onClick={handleCounterDec}>
                --
              </button>
              <button
                className="btn btn-success"
                onClick={() => setCounter(counter + 1)}
              >
                ++
              </button>
            </div>

            <hr />
            <input
              type="text"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              placeholder="Birth year"
            />
            <button onClick={handleAgeCheck}>Check</button>
            <br />
            <br />
            {birth && <h3>Your age is : {birth} years</h3>}
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
