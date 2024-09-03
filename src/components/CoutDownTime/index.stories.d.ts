import type { StoryObj } from '@storybook/react';
import { CountdownTimerProps } from './index';
declare const meta: {
    component: import("react").FC<CountdownTimerProps>;
    title: string;
    tags: string[];
    parameters: {
        backgrounds: {
            default: string;
            values: {
                name: string;
                value: string;
            }[];
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
/** 基础用法 */
export declare const Default: Story;
