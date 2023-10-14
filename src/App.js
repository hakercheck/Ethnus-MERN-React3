import React, { useState, useEffect } from "react";
import { Collapse } from "bootstrap";
import "./App.css";

export default function ColourPicker() {
  const [color, setColor] = useState("#000000");
  const handleColorChange = (color) => {
    const container = document.querySelector(".container");
    container.style.backgroundColor = color;
    setToggle((toggle) => !toggle);
  };

  var [toggle, setToggle] = useState(false);

  useEffect(() => {
    var myCollapse = document.getElementById("collapseExample");
    var bsCollapse = new Collapse(myCollapse, { toggle: false });
    toggle ? bsCollapse.show() : bsCollapse.hide();
  });
  return (
    <>
      <div
        className="overflow-y-hidden col-8 z-2 position-absolute vw-100 vh-100 col-md-8 col-sm-4 col-lg-8"
      >
        <div
          className=" align-items-center d-flex flex-column text-center z-2 position-absolute col-8 col-md-8 col-sm-4 col-lg-8"
          style={{
            marginTop: "15vh",
            marginLeft: "17vw"
          }}
        >
          <h1>Color Picker</h1>
          <div
            className="container rounded shadow p-5"
            style={{ height: "60vh", backgroundColor: color }}
          ></div>
          <div className="text-center w-100 z-3 position-absolute col-12 col-md-8 col-sm-4 col-lg-8"
            style={{ marginTop: "35vh" }}
          >
            <div className="collapse" id="collapseExample">
              <div className="card-body bg-tranparent p-0">
                <div className="d-grid d-md-block d-sm-block d-lg-block d-inline-block">
                  <button
                    className="btn p-3 m-1 shadow"
                    type="button"
                    style={{ backgroundColor: "red", border: "2px solid black" }}
                    onClick={() => handleColorChange("red")}
                  ></button>
                  <button
                    className="btn p-3 m-1 shadow"
                    type="button"
                    style={{ backgroundColor: "greenyellow", border: "2px solid black" }}
                    onClick={() => handleColorChange("greenyellow")}
                  ></button>
                  <button
                    className="btn p-3 m-1 shadow"
                    type="button"
                    style={{ backgroundColor: "blue", border: "2px solid black" }}
                    onClick={() => handleColorChange("blue")}
                  ></button>
                  <button
                    className="btn p-3 m-1 shadow"
                    type="button"
                    style={{ backgroundColor: "yellow", border: "2px solid black" }}
                    onClick={() => handleColorChange("yellow")}
                  ></button>
                  <button
                    className="btn p-3 m-1 shadow"
                    type="button"
                    style={{ backgroundColor: "magenta", border: "2px solid black" }}
                    onClick={() => handleColorChange("magenta")}
                  ></button>
                  <button
                    className="btn p-3 m-1 shadow"
                    type="button"
                    style={{ backgroundColor: "aqua", border: "2px solid black" }}
                    onClick={() => handleColorChange("aqua")}
                  ></button>
                  <button
                    className="btn p-3 m-1 shadow"
                    type="button"
                    style={{ backgroundColor: "orange", border: "2px solid black" }}
                    onClick={() => handleColorChange("orange")}
                  ></button>
                  <button
                    className="btn p-3 m-1 shadow"
                    type="button"
                    style={{ backgroundColor: "purple", border: "2px solid black" }}
                    onClick={() => handleColorChange("purple")}
                  ></button>
                  <button
                    className="btn p-3 m-1 shadow"
                    type="button"
                    style={{ backgroundColor: "pink", border: "2px solid black" }}
                    onClick={() => handleColorChange("pink")}
                  ></button>
                  <button
                    className="btn p-3 m-1 shadow"
                    type="button"
                    style={{ backgroundColor: "green", border: "2px solid black" }}
                    onClick={() => handleColorChange("green")}
                  ></button>
                  <button
                    className="btn p-3 m-1 shadow"
                    type="button"
                    style={{ backgroundColor: "salmon", border: "2px solid black" }}
                    onClick={() => handleColorChange("salmon")}
                  ></button>
                  <button
                    className="btn p-3 m-1 shadow"
                    type="button"
                    style={{ backgroundColor: "skyblue", border: "2px solid black" }}
                    onClick={() => handleColorChange("skyblue")}
                  ></button>
                  <button
                    className="btn p-3 m-1 shadow"
                    type="button"
                    style={{ backgroundColor: "brown", border: "2px solid black" }}
                    onClick={() => handleColorChange("brown")}
                  ></button>
                  <button
                    className="btn p-3 m-1 shadow"
                    type="button"
                    style={{ backgroundColor: "orangered", border: "2px solid black" }}
                    onClick={() => handleColorChange("orangered")}
                  ></button>
                  <button
                    className="btn p-3 m-1 shadow"
                    type="button"
                    style={{ backgroundColor: "cadetblue", border: "2px solid black" }}
                    onClick={() => handleColorChange("cadetblue")}
                  ></button>
                  <button
                    className="btn p-3 m-1 shadow"
                    type="button"
                    style={{ backgroundColor: "gold", border: "2px solid black" }}
                    onClick={() => handleColorChange("gold")}
                  ></button>
                </div>
              </div>
            </div>
            <button
              className="btn btn-success shadow"
              onClick={() => setToggle((toggle) => !toggle)}
            >
              Pick a Color
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
