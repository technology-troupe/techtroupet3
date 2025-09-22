import React, { useEffect, useState } from "react";
import "./intro.css";

const IntroAnimation = ({ onFinish }) => {
  const tasks = [
    { msg: "Hello", delay: 200 },
    { msg: "नमस्ते", delay: 500 },
    { msg: "Hola", delay: 800 },
    { msg: "Bonjour", delay: 1000 },
    { msg: "Ciao", delay: 1200 },
    { msg: "Konnichiwa", delay: 1400 },
    { msg: "Annyeong", delay: 1600 },
  ];

  const [currentMsg, setCurrentMsg] = useState("");
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    let timeoutIds = [];

    tasks.forEach((task, index) => {
      const id = setTimeout(() => {
        setOpacity(0);
        setTimeout(() => {
          setCurrentMsg(task.msg);
          setOpacity(1);
        }, 600);

        if (index === tasks.length - 1) {
          setTimeout(() => {
            onFinish(); 
          }, 1500);
        }
      }, task.delay);
      timeoutIds.push(id);
    });

    return () => {
      timeoutIds.forEach((id) => clearTimeout(id));
    };
  }, []);

  return (
    <div id="intro-screen" className="intro-screen">
      <h1 id="output" style={{ opacity, transition: "opacity 0.6s" }}>
        {currentMsg}
      </h1>
    </div>
  );
};

export default IntroAnimation;
