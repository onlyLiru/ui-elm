import styled from 'styled-components';
import tw from 'tailwind-styled-components';

export interface ButtonProps {
  /** 背景色 */
  children?: React.ReactNode | string;
  /**
   * children也可以使用label代替
   */
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
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /** 自定义样式style */
  style?: any
};

/**
 * Primary UI component for user interaction
 */

const ButtonComponent = tw.button<ButtonProps>`
  ${p => p.primary ? 'text-white' : 'text-[rgba(0,0,0,.65)]'}
  px-4
  py-1
  ${p => p.size === 'small' && ('px-2 py-0')}}
  ${p => p.size === 'medium' && 'px-4'}}
  ${p => p.size === 'large' && 'px-6'}}
  rounded-sm
  hover:opacity-80
`;
const AddonButton = styled(ButtonComponent) <ButtonProps>`
  background:${props => props.backgroundColor ? props.backgroundColor : (props.primary ? '#f90' : '#d9d9d9')};
`

export const Button = (props: ButtonProps) => (
  <AddonButton {...props}>{props.children || props.label}</AddonButton>
);
