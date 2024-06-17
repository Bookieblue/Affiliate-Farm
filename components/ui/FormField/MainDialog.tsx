import React from 'react';
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";



interface DialogProps {
  isOpen: boolean;
  onOpenChange: () => void;
  onClick: () => void;
  title: string;
  buttonName: React.ReactNode;
  description?: string;
  children?: React.ReactNode;
}

const MainDialog: React.FC<DialogProps> = ({ title, description, children, isOpen, onOpenChange, onClick, buttonName}) => {
  
  return (
    <div className='w-full'>
      <Button className="w-full" onClick={onClick}>{buttonName}</Button>
      <Dialog open={isOpen} onOpenChange={onOpenChange}>
        <DialogContent className="sm:max-w-[650px]  max-h-[80vh] overflow-y-auto hide-scrollbar">
          <DialogHeader>
            <DialogTitle className="text-white bold-24 mb-6">{title}</DialogTitle>
            {description && <DialogDescription className='text-cream-20 regular-16'>{description}</DialogDescription>}
          </DialogHeader>
          {children}
          <DialogFooter>
          </DialogFooter>
        </DialogContent>
      </Dialog>

    </div>
  );
};

export default MainDialog;








