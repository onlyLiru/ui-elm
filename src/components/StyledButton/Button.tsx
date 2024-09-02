import styled from 'styled-components';
import tw from 'tailwind-styled-components';

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

const sizeMap = {
  small: '0.2rem 0.4rem',
  medium: '0.4rem 0.8rem',
  large: '0.6rem 1.2rem',
}

const Button = tw.button<ButtonProps>`
  ${p => p.backgroundColor ? `bg-[${p.backgroundColor}]` : (p.primary ? 'bg-[#f90]' : 'bg-[#d9d9d9]')}
  ${p => p.primary ? 'text-white' : 'text-[rgba(0,0,0,.65)]'}
  px-4
  py-1
  rounded-sm
`;

export default (props: ButtonProps) => (
  <Button {...props}>{props.children || props.label}</Button>
);
