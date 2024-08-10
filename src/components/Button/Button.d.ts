import React from 'react';
export type ButtonProps = {
    label: string;
    /** 背景色 */
    backgroundColor?: string;
    /** 点击事件 */
    onClick?: () => void;
    /**
     * 主题色按钮
     */
    primary?: boolean;
    /**
     * 按钮的尺寸
     */
    size?: 'small' | 'medium' | 'large';
};
declare const Button: React.FC<ButtonProps>;
export default Button;
