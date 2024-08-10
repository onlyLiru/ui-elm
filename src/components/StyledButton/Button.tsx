import styled from 'styled-components';

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

const Button = styled.button<ButtonProps>`
  background: var(--primary-color);
  border-radius: 3px;
  border: none;
  color: white;
  padding: 0.5em 1em;
`;

export default (props: ButtonProps) => (
  <Button {...props}>{props.children || props.label}</Button>
);
