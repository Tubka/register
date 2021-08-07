import { useEffect, useState } from "react";

export const useTimer = () => {
  const [time, setTime] = useState(new Date().getTime());
  const [resetTime, setResetTime] = useState(new Date().getTime() + 20 * 1000);
  const [timeToReset, setTimeToReset] = useState(); 
  const [startTimer, setStartTimer] = useState(false);
  const listEventListener = ["mousedown", "mousemove", "keypress", "scroll", "touchstart"];

  useEffect(() => {
    if(!startTimer) return;
    setResetTime(new Date().getTime() + 20 * 1000)
    listEventListener?.forEach((el) => {
      window.addEventListener(el ,() => {
        setResetTime(new Date().getTime() + 20*1000);
      });
    });

    const timer = window.setInterval(() => {
      setTime(new Date().getTime());
    },200);

    if(!startTimer) {
      window.clearInterval(timer)
    }

    return () => {
      window.clearTimeout(timer);
    };
  },[startTimer]);


  useEffect(() => {
    if(timeToReset < 1) {
      window.location.reload();
    }
  },[timeToReset])

  useEffect(() => {
    const diff = (resetTime - time)/1000;
    setTimeToReset(diff.toFixed());
  },[time]);

  return { timeToReset, setStartTimer }
}