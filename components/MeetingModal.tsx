"use client";
import { ReactNode } from "react";
import { Dialog, DialogContent } from "./ui/dialog";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { IconType } from "react-icons";

interface MeetingModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  className?: string;
  children?: ReactNode;
  handleClick?: () => void;
  buttonText?: string;
  instantMeeting?: boolean;
  buttonIcon?: IconType;
  buttonClassName?: string;
}

const MeetingModal = ({
  isOpen,
  onClose,
  title,
  className,
  children,
  handleClick,
  buttonText,
  buttonIcon: ButtonIcon,
  buttonClassName,
}: MeetingModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="flex w-full max-w-[520px] flex-col gap-6 border-none bg-dark-1 px-6 py-9 text-white">
        <div className="flex flex-col gap-6">
          <h1 className={cn("text-3xl font-bold leading-[42px]", className)}>
            {title}
          </h1>
          {children}
          <Button
            className={
              "bg-vid-1-gradient focus-visible:ring-0 focus-visible:ring-offset-0"
            }
            onClick={handleClick}
          >
            {ButtonIcon && <ButtonIcon className="mr-2" size={13} />}
            {buttonText || "Programar reunión"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default MeetingModal;
