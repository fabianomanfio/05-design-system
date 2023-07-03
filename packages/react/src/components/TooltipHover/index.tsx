import { ComponentProps } from 'react';
import {
  TooltipProvider,
  TooltipRoot,
  TooltipTrigger,
  TooltipPortal,
  TooltipArrow,
  TooltipContent,
} from './styles';
import { Text } from '../Text';

export interface TooltipHoverProps
  extends ComponentProps<typeof TooltipContent> {
  message: string;
}

export function TooltipHover({
  children,
  message,
  sideOffset = 5,
  ...props
}: TooltipHoverProps) {
  return (
    <TooltipProvider>
      <TooltipRoot>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipPortal>
          <TooltipContent {...props} sideOffset={sideOffset}>
            <Text size={'sm'}>{message}</Text>
            <TooltipArrow />
          </TooltipContent>
        </TooltipPortal>
      </TooltipRoot>
    </TooltipProvider>
  );
}

TooltipHover.displayName = 'Tooltip-Hover';
