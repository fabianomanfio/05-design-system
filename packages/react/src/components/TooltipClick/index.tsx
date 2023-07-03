import React, { ComponentProps } from 'react';
import { Text } from '../Text';
import {
  TooltipContainer,
  TooltipTrigger,
  TooltipContent,
  TooltipArrow,
} from './styles';

export interface TooltipClickProps
  extends ComponentProps<typeof TooltipContent> {
  triggerElement: React.ReactElement;
  content: string;
}

export function TooltipClick({
  triggerElement,
  content,
  ...props
}: TooltipClickProps) {
  return (
    <TooltipContainer modal={true}>
      <TooltipTrigger>{triggerElement}</TooltipTrigger>

      <TooltipContent side={'top'} {...props}>
        <Text>{content}</Text>
        <TooltipArrow />
      </TooltipContent>
    </TooltipContainer>
  );
}

TooltipClick.displayName = 'Tooltip-Click';
