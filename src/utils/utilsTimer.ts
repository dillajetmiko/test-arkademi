import { useEffect, useState } from "react"

export const useTimer = () => {
  const [timerSecond, setTimerSecond] = useState(29880)
  const timer = () => setTimerSecond(timerSecond - 1)
  useEffect(() => {
    const interval = setInterval(timer, 1000)
    return () => clearInterval(interval)
  }, [timerSecond])
  const h = Math.floor(timerSecond / 3600);
  const m = Math.floor(timerSecond % 3600 / 60);
  const s = Math.floor(timerSecond % 3600 % 60);

  const hDispl = h < 10 ? "0" + h : `${h}`;
  const mDispl = m < 10 ? "0" + m : `${m}`;
  const sDisp = s < 10 ? "0" + s : `${s}`;
  return `${hDispl} : ${mDispl} : ${sDisp}`;
}