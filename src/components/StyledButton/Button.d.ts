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
declare const _default: (props: ButtonProps) => import("react/jsx-runtime").JSX.Element;
export default _default;
