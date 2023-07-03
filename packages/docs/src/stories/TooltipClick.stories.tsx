import React from 'react';
import type { StoryObj, Meta } from '@storybook/react';

import { Text, TooltipClick, TooltipClickProps } from '@mws-ignite-ui/react';

export default {
  title: 'Data display/Tooltip-Click',
  component: TooltipClick,
  args: {
    triggerElement: <Text>Text example (Click)</Text>,
    content: 'Tooltip exemple with Click',
  },
  artTypes: {
    triggerElement: {
      description: 'Element that opens tooltip when is clicked',
      control: {
        type: null,
      },
    },
    content: {
      description: 'Text that will be displayed inside the tooltip',
      control: {
        type: 'text',
      },
    },
  },
} as Meta<TooltipClickProps>;

export const Primary: StoryObj<TooltipClickProps> = {};
