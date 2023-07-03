import React from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import {
  Box,
  Text,
  TooltipHover,
  TooltipHoverProps,
} from '@mws-ignite-ui/react';

export default {
  title: 'Data Display/Tooltip-Hover',
  component: TooltipHover,
  tags: ['autodocs'],
  args: {
    children: <Text>Hover para abrir tooltip</Text>,
    message: '03 de julho - Disponível',
    sideOffset: 5,
  },
  decorators: [
    (Story) => {
      return (
        <Box
          as={'div'}
          css={{
            display: 'flex',
            flexDirection: 'row',
            gap: '$2',
            alignItems: 'center',
            justifyContent: 'left',
            width: 'fit-content',
          }}
        >
          {Story()}
        </Box>
      );
    },
  ],
} as Meta<TooltipHoverProps>;

export const Primary: StoryObj<TooltipHoverProps> = {};
