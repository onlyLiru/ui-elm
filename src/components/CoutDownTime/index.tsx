import React, { useEffect, useState, useRef } from 'react';

export interface CountdownTimerProps {
  /**  未来的一个绝对时间 例如：2024.12.12 23:45:45 */
  deadline: string | number | Date;
  /**  倒计时结束时的回调 */
  callback?: Function,
  /** 倒计时结束的自定义展示 */
  children?: React.ReactNode
}

interface TimeLeft {
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ deadline, callback, children }) => {
  const [isOver, setIsOver] = useState(false);

  const calculateTimeLeft = (): TimeLeft => {
    const difference = +new Date(deadline) - +new Date();
    let timeLeft: TimeLeft = {
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
    if (difference > 0) {
      timeLeft = {
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());
  const timerId = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    timerId.current = setInterval(() => {
      const newTimeLeft = calculateTimeLeft();
      setTimeLeft(newTimeLeft);

      // 检查是否到时间，如果是则清除定时器
      if (newTimeLeft.hours === 0 && newTimeLeft.minutes === 0 && newTimeLeft.seconds === 0) {
        clearInterval(timerId.current!);
        setIsOver(true);
        callback && callback?.();
      }
    }, 1000);

    return () => {
      // 组件卸载时清除定时器
      clearInterval(timerId.current!);
    };
  }, [deadline]);

  const formatTime = (value: number): string => {
    return value < 10 ? `0${value}` : value.toString();
  };

  const timeComponents = [
    formatTime(timeLeft.hours),
    formatTime(timeLeft.minutes),
    formatTime(timeLeft.seconds),
  ].join(':');


  return (
    <>
      {
        isOver && children ? children : <span> {timeComponents} </span>
      }
    </>
  );
};

export default CountdownTimer;
