import React from 'react';
import classNames from 'classnames';
import styles from './button.module.scss';

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

const Button: React.FC<ButtonProps> = ({ label, size = 'medium' }) => {
  return (
    <div className={classNames(styles.elmButton, styles[size])}>{label}</div>
  );
};

export default Button;
