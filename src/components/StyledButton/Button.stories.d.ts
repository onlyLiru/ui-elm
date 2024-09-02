import type { StoryObj } from '@storybook/react';
declare const meta: {
    title: string;
    component: (props: import("./Button").ButtonProps) => import("react/jsx-runtime").JSX.Element;
    parameters: {
        layout: string;
    };
    tags: string[];
    argTypes: {
        backgroundColor: {
            control: "color";
        };
        primary: {
            control: "boolean";
        };
    };
    args: {
        onClick: import("@vitest/spy").Mock<[], void>;
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Primary: Story;
export declare const Medium: Story;
export declare const Large: Story;
export declare const Small: Story;
