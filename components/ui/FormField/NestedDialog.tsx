import React from 'react';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { CheckIcon, TextSelectIcon } from 'lucide-react';
import { SelectIcon } from '@radix-ui/react-select';

interface NestedDialogProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description?: string;
  children?: React.ReactNode;
}

const NestedDialog: React.FC<NestedDialogProps> = ({ isOpen, onClose, title, description, children }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[550px]">
        <DialogHeader className='flexCenter'>
          <CheckIcon className="size-8 bg-yellow-50 rounded-full p-1 mt-7" />
          <DialogTitle className='mb-5 text-center text-white'>{title}</DialogTitle>
          {description && <DialogDescription className='text-center text-cream-20'>{description}</DialogDescription>}
        </DialogHeader>
        {children}
        <DialogFooter>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default NestedDialog;
