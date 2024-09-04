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
  /** 自定义样式style */
  style?: any
};

const sizeMap = {
  small: '0.2rem 0.4rem',
  medium: '0.4rem 0.8rem',
  large: '0.6rem 1.2rem',
}

const Button = tw.button<ButtonProps>`
  ${p => p.primary ? 'text-white' : 'text-[rgba(0,0,0,.65)]'}
  px-2
  py-1
  ${p => p.size === 'small' && 'px-2'}}
  ${p => p.size === 'medium' && 'px-4'}}
  ${p => p.size === 'large' && 'px-6'}}
  rounded-sm
  hover:opacity-80
`;
const AddonButton = styled(Button) <ButtonProps>`
  background:${props => props.backgroundColor ? props.backgroundColor : (props.primary ? '#f90' : '#d9d9d9')};
`

export default (props: ButtonProps) => (
  <AddonButton {...props}>{props.children || props.label}</AddonButton>
);
