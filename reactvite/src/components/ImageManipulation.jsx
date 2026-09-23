import React, { useState } from 'react';
import image from "../images/image.png";

function ImageManipulation() {

  // Default image dimensions
  const [height, setHeight] = useState(200);
  const [width, setWidth] = useState(200);

  // Functions
  function increaseHeight() {
    setHeight(height + 20);
  }
  const[red,setRed]=useState(0);
  const[green,setGreen]=useState(0);
  const[blue,setBlue]=useState(0);

  function decreaseHeight() {
    setHeight(height - 20);
  }

  function increaseWidth() {
    setWidth(width + 20);
  }

  function decreaseWidth() {
    setWidth(width - 20);
  }
  function changeBGcolor(){
    setRed(Math.random()*255);
    setGreen(Math.random()*255);
    setBlue(Math.random()*255);
  }

  return (
    <div>
      <h2>Image Manipulation</h2>

      <div
        style={{
          border: '4px solid red',
          height: '300px',
          width: '300px',
          margin: 'auto',
          backgroundColor: `rgb(${red},${green},${blue})`
        }}
      >
        <img
          src={image}
          height={height}
          width={width}
        />
      </div>

      <div>

        <button onClick={increaseHeight}>
          Increase Height
        </button>

        <button onClick={decreaseHeight}>
          Decrease Height
        </button>

        <button onClick={increaseWidth}>
          Increase Width
        </button>

        <button onClick={decreaseWidth}>
          Decrease Width
        </button>

        <button onClick={changeBGcolor}>
          Change Background Color
        </button>

      </div>

    </div>
  );
}

export default ImageManipulation;