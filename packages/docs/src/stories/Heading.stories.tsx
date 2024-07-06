import type { Meta, StoryObj } from '@storybook/react';
import { Heading, HeadingProps } from '@intelli-ui/react';

export default {
  title: 'Typography/Heading',
  component: Heading,
  args: {
    children: 'Custom title',
    size: 'md',
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg', '2xl', '4xl', '5xl', '6xl'],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<HeadingProps>;

export const Primary: StoryObj<HeadingProps> = {};

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children: 'H1 Heading with property size: "lg"',
    as: 'h1',
    size: 'lg',
  },
  parameters: {
    docs: {
      description: {
        story: `By default, the heading component will be even a "h2" element, 
           but we can change it using "as" property.`,
      },
    },
  },
};
