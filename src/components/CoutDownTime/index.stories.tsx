import type { Meta, StoryObj } from '@storybook/react';

import Index, { CountdownTimerProps } from './index';

const meta = {
  component: Index,
  title: '基础组件/倒计时',
  tags: ['autodocs'],
  parameters: {
    backgrounds: {
      default: '#f2f3f7',
      values: [
        { name: '#f2f3f7', value: '#f2f3f7' },
      ],
    },
  },

} satisfies Meta<typeof Index>;

export default meta;

type Story = StoryObj<typeof meta>;
function Componet(props: CountdownTimerProps) {
  // const deadline = new Date(); 
  // deadline.setSeconds(deadline.getSeconds() + 3); 

  return (
    <Index deadline={props.deadline} callback={props.callback}>{props.children}</Index>
  )
}

const deadline = new Date();
/** 基础用法 */
export const Default: Story = {
  name: '默认',
  args: {
    deadline: deadline.setSeconds(deadline.getSeconds() + 30),
    callback: () => { console.log('first') },
    children: <>时间到了</>
  },
  render: (args) => <Componet {...args} />,
};
