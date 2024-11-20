import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faXmarkCircle } from "@fortawesome/free-regular-svg-icons";

const Character = ({ char, className }) => (
  <p className={`${className} text-4xl font-semibold transition-all duration-500`}>
    {char}
  </p>
);

const AnimatedIcon = ({ icon, isBlinking, activeClass, inactiveClass }) => (
  <FontAwesomeIcon
    icon={icon}
    className={`text-2xl ${isBlinking ? activeClass : inactiveClass}`}
  />
);

const usePointerAnimation = (length, intervalDuration = 500) => {
  const [array, setArray] = useState(new Array(length).fill("-"));
  const [isCheckBlink, setCheckBlink] = useState(false);
  const [isXBlink, setXBlink] = useState(false);

  const ptr = useRef(0); // Pointer
  const flag = useRef(true); // Direction flag (forward/backward)

  useEffect(() => {
    const interval = setInterval(() => {
      const newArray = [...array]; // Copy array

      // Animation Logic
      if (ptr.current === newArray.length) {
        flag.current = false; // Reached end, reverse direction
        ptr.current -= 1;
      } else if (ptr.current === -1) {
        flag.current = true; // Reached start, move forward
        ptr.current += 1;
      }

      // Move pointer based on direction
      if (flag.current) {
        if (ptr.current > 0) newArray[ptr.current - 1] = "-"; // Reset previous character
        newArray[ptr.current] = "_"; // Current character for forward direction
        ptr.current += 1;
      } else {
        if (ptr.current < newArray.length - 1) newArray[ptr.current + 1] = "-"; // Reset next character
        newArray[ptr.current] = "_"; // Current character for backward direction
        ptr.current -= 1;
      }

      // Manage blinking effects based on pointer position
      if (ptr.current === -1) {
        setCheckBlink(true);
        setTimeout(() => setCheckBlink(false), 1000);
      }

      if (ptr.current === newArray.length) {
        setXBlink(true);
        setTimeout(() => setXBlink(false), 1000);
      }

      setArray(newArray); // Update array state
    }, intervalDuration);

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [array, intervalDuration]);

  return { array, isCheckBlink, isXBlink };
};

export default function ECMasterHomeAnimation({ length = 15, intervalDuration = 500 }) {
  const { array, isCheckBlink, isXBlink } = usePointerAnimation(length);

  return (
    <div className="flex items-center space-x-2">
      <AnimatedIcon
        icon={faCircleCheck}
        isBlinking={isCheckBlink}
        activeClass="text-green-500"
        inactiveClass="text-gray-300"
      />
      {array.map((item, index) => (
        <Character key={index} char={item} className="transition-all duration-500" />
      ))}
      <AnimatedIcon
        icon={faXmarkCircle}
        isBlinking={isXBlink}
        activeClass="text-red-500"
        inactiveClass="text-gray-300"
      />
    </div>
  );
}
