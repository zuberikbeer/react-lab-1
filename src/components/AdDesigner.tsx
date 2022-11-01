import { useState } from "react";
import "./AdDesigner.css";

const AdDesigner = () => {
  const [flavor, setFlavor] = useState("Chocolate"); //string
  const [darkTheme, setdarkTheme] = useState<boolean>(); //boolean
  const [fontSize, setFontSize] = useState(50); //number

  return (
    <section className="AdDesigner">
      {" "}
      <h1 className="Ad-Designer">Ad Designer</h1>
      <div className={`add ${darkTheme === true ? " dark-theme" : ""}`}>
        <p className="vote-for">Vote for:</p>
        <p style={{ fontSize: `${fontSize}px` }}>{flavor}</p>
      </div>
      <div className="boot">
        <h3 className="What-to-support">What to support</h3>
        <div className="flavors">
          <button
            className="Chocolate"
            onClick={() => {
              setFlavor("Chocolate");
            }}
          >
            Chocolate
          </button>
          <button
            className="Vanilla"
            onClick={() => {
              setFlavor("Vanilla");
            }}
          >
            Vanilla
          </button>
          <button
            className="Strawberry"
            onClick={() => {
              setFlavor("Strawberry");
            }}
          >
            Strawberry
          </button>
        </div>

        <div>
          <p className="Color-Theme">Color Theme</p>
          <button
            className="light"
            onClick={() => {
              setdarkTheme(false);
            }}
          >
            Light
          </button>

          <button
            className="dark"
            onClick={() => {
              setdarkTheme(true);
            }}
          >
            Dark
          </button>
        </div>

        <div>
          <p className="Font-Size">Font Size</p>
          <button
            className="down"
            onClick={() => {
              setFontSize((prev) => {
                return prev - 1;
              });
            }}
          >
            Down
          </button>
          <p>{fontSize}</p>
          <button
            className="up"
            onClick={() => {
              setFontSize((prev) => {
                return prev + 1;
              });
            }}
          >
            Up
          </button>
        </div>
      </div>
    </section>
  );
};

export default AdDesigner;
