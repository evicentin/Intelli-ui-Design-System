import type { Meta, StoryObj } from '@storybook/react';
import { Avatar, AvatarProps } from '@intelli-ui/react';

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: '../../assets/avatar.jpg',
    alt: 'avatar',
  },
  argTypes: {
    src: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta<AvatarProps>;

export const Primary: StoryObj<AvatarProps> = {};

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
};
