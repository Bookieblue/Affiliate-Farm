import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface PopoverProps {
  trigger: any;
  children?: React.ReactNode;
}

export const PopOver = ({ trigger, children }: PopoverProps) => {
    console.log('Trigger:', trigger);
  return (
    <Popover>
      <PopoverTrigger asChild className="regular-16 text-gray-10 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">{trigger}</PopoverTrigger>
      <PopoverContent className="w-80">{children}</PopoverContent>
    </Popover>
  );
};
