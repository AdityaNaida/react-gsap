import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef, useState } from "react";
import "./App.css";

export default function App() {
  // const [xPosition, setXPosition] = useState(0);
  // const [yPosition, setYPosition] = useState(0);
  // const [rotatePosition, setRotatePosition] = useState(0);
  // const ufo = useRef();
  // const randomX = gsap.utils.random(-500, 500, 100);
  // const randomY = gsap.utils.random(-500, 500, 100);
  // const rotate = gsap.utils.random(-360, 360, 60);

  // useGSAP(
  //   () => {
  //     gsap.to(ufo.current, {
  //       x: xPosition,
  //       y: yPosition,
  //       rotate: rotatePosition,
  //       duration: 0.5,
  //     });
  //   },
  //   { scope: "main", dependencies: [xPosition, yPosition, rotatePosition] }
  // );

  const [rotateVal, setRotateVal] = useState(0);
  const random = gsap.utils.random(-360, 360, 60);
  const { contextSafe } = useGSAP();

  const rotate = contextSafe(() => {
    gsap.to(".box", {
      rotate: 360,
      duration: 0.5,
    });
  });

  return (
    <div className="main">
      <button className="btn" onClick={rotate}>
        Move
      </button>
      <div className="box"></div>
    </div>
  );
}
