import React from 'react';
export interface CountdownTimerProps {
    /**  未来的一个绝对时间 例如：2024.12.12 23:45:45 */
    deadline: string | number | Date;
    /**  倒计时结束时的回调 */
    callback?: Function;
    /** 倒计时结束的自定义展示 */
    children?: React.ReactNode;
}
declare const CountdownTimer: React.FC<CountdownTimerProps>;
export default CountdownTimer;
