'use client'
import { useState } from 'react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import Image from 'next/image';
import QuestionIcon from '@/components/assets-nav-icons/question';

import { CopyIcon, CheckIcon } from 'lucide-react';

interface ToolTipProps {
  content: string;
}

export function ToolTip({ content }: ToolTipProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(content);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset the copied state after 2 seconds
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <div className='cursor-pointer size-2'>
          <QuestionIcon  />
          </div>
        </TooltipTrigger>
        <TooltipContent onClick={handleCopy} className='cursor-pointer flex items-center'>
          <p className='mr-2'>Program ID: {content}</p>
          {copied ? <CheckIcon className='text-green-500 size-4' /> : <CopyIcon className='size-4'  />}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

