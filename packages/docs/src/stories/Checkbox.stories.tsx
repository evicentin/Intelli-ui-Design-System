import type { Meta, StoryObj } from '@storybook/react';
import { Box, Text, Checkbox, CheckboxProps } from '@intelli-ui/react';

export default {
  title: 'Form/Checkbox',
  component: Checkbox,
  args: {},
  decorators: [
    (Story) => {
      return (
        <Box
          as='label'
          css={{ display: 'flex', flexDirection: 'row', gap: '$2' }}
        >
          {Story()}
          <Text size='sm'>Select your option</Text>
        </Box>
      );
    },
  ],
} as Meta<CheckboxProps>;

export const Primary: StoryObj<CheckboxProps> = {};
