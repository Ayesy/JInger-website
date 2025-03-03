// src/components/NewmanButton.js
import React, { useRef, useEffect } from "react";
import p5 from "p5";
import sketch from "./newmanButtonSketch";

const NewmanButton = ({ onClick }) => {
  const canvasRef = useRef();

  useEffect(() => {
    const p5Instance = new p5((p) => sketch(p), canvasRef.current);
    return () => {
      p5Instance.remove();
    };
  }, []);

  return (
    <div
      ref={canvasRef}
      style={{
        display: "inline-block",
        cursor: "pointer",
      }}
      onClick={onClick} // 確保 React 也能捕獲點擊
    />
  );
};

export default NewmanButton;