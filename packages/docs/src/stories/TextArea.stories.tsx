import React from 'react';
import type { StoryObj, Meta } from '@storybook/react';

import { Box, Text, TextArea, TextAreaProps } from '@mws-ignite-ui/react';

export default {
  title: 'Form/TextArea',
  component: TextArea,
  args: {},
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
          <Text size="sm">Observation</Text>
          {Story()}
        </Box>
      );
    },
  ],
} as Meta<TextAreaProps>;

export const Primary: StoryObj<TextAreaProps> = {
  args: {
    disabled: false,
    placeholder: 'Add any observation...',
  },
};

export const WithPrefix: StoryObj<TextAreaProps> = {
  args: {
    prefix: 'cal.com/',
  },
};
