"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

type TaskData = {
  uuid: string;
  title: string;
  description: string;
};

interface ViewTaskModalProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  taskData: TaskData;
}

export default function ViewTaskModal({
  isOpen,
  setIsOpen,
  taskData,
}: ViewTaskModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <a
          className="text-dark font-medium hover:text-accent transition-colors cursor-pointer"
          onClick={() => setIsOpen(true)}
        >
          {taskData.title}
        </a>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[625px] bg-white">
        <DialogHeader>
          <DialogTitle className="text-dark">
            {taskData.title} Details
          </DialogTitle>
          <DialogDescription className="text-dark/70">
            View the details of this task.
          </DialogDescription>
        </DialogHeader>
        <div className="grid grid-cols-2 gap-4">
          <p className="text-dark/80">
            <span className="font-medium">Description:</span>
          </p>
          <p className="text-dark/80 col-span-1">{taskData.description}</p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
