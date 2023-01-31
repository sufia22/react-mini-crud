import { useState } from "react";
import Modal from "../../components/Modal/Modal";
import "./About.scss";

const colors = [
  "red",
  "green",
  "blue",
  "orange",
  "pink",
  "purple",
  "white",
  "black",
  "yellow",
  "tomato",
  "gold",
  "gray",
  "skyblue",
];

const About = () => {
  const [bg, setBg] = useState("red");
  const [counter, setCounter] = useState(0);
  const [modalShow, setModalShow] = useState(false);

  const handleCountIncrement = () => {
    setCounter(counter >= 12 ? 0 : counter + 1);
    setBg(colors[counter]);
  };

  const handleCountDec = () => {
    setCounter(counter <= 0 ? 0 : counter - 1);
    setBg(colors[counter]);
  };

  return (
    <>
      <div style={{ backgroundColor: bg }} className="main-body">
        <div className="colors-btn">
          <div className="counter">
            <h1
              style={{
                color: `${counter === 7 || counter === 9 ? "black" : "white"}`,
              }}
            >
              {counter}
            </h1>
            <button onClick={handleCountIncrement}>++</button>
            <button onClick={handleCountDec}>--</button>
          </div>
          <hr />
          <button onClick={() => setBg("red")}>Red</button>
          <button onClick={() => setBg("green")}>Green</button>
          <button onClick={() => setBg("blue")}>Blue</button>
          <button onClick={() => setBg("pink")}>Pink</button>
          <button onClick={() => setBg("orange")}>Orange</button>
          <button onClick={() => setBg("tomato")}>Tomato</button>
          <hr />
          {modalShow && (
            <Modal title="Sorobindu" hide={setModalShow}>
              <>
                <h1>You are my modal</h1>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Recusandae, consequatur error quae eaque eius doloribus
                  dignissimos exercitationem natus ullam corporis.
                </p>
              </>
            </Modal>
          )}
          <button onClick={() => setModalShow(true)}>Modal</button>
        </div>
      </div>
    </>
  );
};

export default About;
