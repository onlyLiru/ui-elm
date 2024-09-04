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
    style?: any;
}
export declare const Button: (props: ButtonProps) => import("react/jsx-runtime").JSX.Element;
