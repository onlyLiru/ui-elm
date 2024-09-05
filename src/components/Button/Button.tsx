import React from 'react';
import classNames from 'classnames';
import styles from './button.module.scss';

export type ButtonProps = {
  children?: React.ReactNode | string;
  label?: string;
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

const Button: React.FC<ButtonProps> = ({
  children = null,
label = '',
  size = 'medium',
  primary = false,
  backgroundColor,
  onClick = () => {},
}) => {
  return (
    <div
      className={classNames(
        styles.elmButton,
 styles[size],
        styles[primary ? 'primary' : 'normal'],
      )}
      style={
      backgroundColor
          ? {
         backgroundColor: backgroundColor,
            }
          : {}
      }
      onClick={onClick}
    >
      {label || children}
    </div>
  );
};

export default Button;
