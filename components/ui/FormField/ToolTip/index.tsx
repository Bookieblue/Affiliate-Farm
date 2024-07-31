import { Button } from '@/components/ui/button'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import Image from 'next/image'

interface ToolTipProps {
  content: string
}

export function ToolTip({ content }: ToolTipProps) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Image src='./question.svg' width={20} height={5} alt='icon' />
        </TooltipTrigger>
        <TooltipContent>
          <p>Program ID : {content} </p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
