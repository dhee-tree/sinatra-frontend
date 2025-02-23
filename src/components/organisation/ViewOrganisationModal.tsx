"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "sonner";
import { OrganisationActions } from "./utils";
import { useForm } from "react-hook-form";
import FormField from "@/components/form/FormField";
import { mutate } from "swr";

type OrganisationFormData = {
  name: string;
  description: string;
  type: "NGO" | "Charity";
  address: string;
  address_line_one: string;
  address_line_two: string;
  address_line_county: string;
  address_line_city: string;
  address_line_postcode: string;
};

type TaskFormData = {
  title: string;
  description: string;
};

interface CreateOrganisationModalProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  organisationData: OrganisationFormData;
}

export default function ViewOrganisationModal({
  isOpen,
  setIsOpen,
  organisationData,
}: CreateOrganisationModalProps) {
  const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);
  const [taskFormData] = useState<TaskFormData>({
    title: "",
    description: "",
  });
  const { createOrganisationTask } = OrganisationActions();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<TaskFormData>();

  const handleTaskSubmit = async (data: TaskFormData) => {
    try {
      const response = await createOrganisationTask(
        data.title,
        data.description
      ).res();

      if (response.ok) {
        toast.success(`Task "${taskFormData.title}" created!`, {
          duration: 5000,
        });
        setIsTaskModalOpen(false);
        mutate("api/listings/");
      } else {
        toast.error(`Failed to create task "${taskFormData.title}"`, {
          duration: 5000,
        });
      }
    } catch (error) {
      console.error(error);
      toast.error(`Failed to create task "${taskFormData.title}"`, {
        duration: 5000,
      });
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <a
          className="text-dark font-medium hover:text-accent transition-colors cursor-pointer"
          onClick={() => setIsOpen(true)}
        >
          {organisationData.name}
        </a>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[625px] bg-white">
        <DialogHeader>
          <DialogTitle className="text-dark">
            {organisationData.name} Details
          </DialogTitle>
          <DialogDescription className="text-dark/70">
            View the details of this organisation.
          </DialogDescription>
        </DialogHeader>
        <div className="grid grid-cols-2 gap-4">
          <p className="text-dark/80">
            <span className="font-medium">Description:</span>
          </p>
          <p className="text-dark/80 col-span-1">
            {organisationData.description}
          </p>
          <p className="text-dark/80">
            <span className="font-medium">Type:</span>
          </p>
          <p className="text-dark/80 col-span-1">{organisationData.type}</p>
          <p className="text-dark/80">
            <span className="font-medium">Address:</span>
          </p>
          <p className="text-dark/80 col-span-1">{organisationData.address}</p>
          <p className="text-dark/80">
            <span className="font-medium">Address Line 1:</span>
          </p>
          <p className="text-dark/80 col-span-1">
            {organisationData.address_line_one}
          </p>
          <p className="text-dark/80">
            <span className="font-medium">Address Line 2:</span>
          </p>
          <p className="text-dark/80 col-span-1">
            {organisationData.address_line_two || "N/A"}
          </p>
          <p className="text-dark/80">
            <span className="font-medium">County:</span>
          </p>
          <p className="text-dark/80 col-span-1">
            {organisationData.address_line_county}
          </p>
          <p className="text-dark/80">
            <span className="font-medium">City:</span>
          </p>
          <p className="text-dark/80 col-span-1">
            {organisationData.address_line_city}
          </p>
          <p className="text-dark/80">
            <span className="font-medium">Postcode:</span>
          </p>
          <p className="text-dark/80 col-span-1">
            {organisationData.address_line_postcode}
          </p>
        </div>
        <hr className="my-4 border-dark/20" />
        <div className="text-center">
          <Button
            onClick={() => setIsTaskModalOpen(true)}
            className="bg-accent text-white hover:bg-accent/90 transition-all"
          >
            Create Task
          </Button>
        </div>

        <Dialog open={isTaskModalOpen} onOpenChange={setIsTaskModalOpen}>
          <DialogContent className="sm:max-w-[425px] bg-white">
            <DialogHeader>
              <DialogTitle className="text-dark">
                Create a New Task for {organisationData.name}
              </DialogTitle>
              <DialogDescription className="text-dark/70">
                Add a task to contribute to this organisation.
              </DialogDescription>
            </DialogHeader>
            <form
              onSubmit={handleSubmit(handleTaskSubmit)}
              className="space-y-4"
            >
              <FormField
                id="taskTitle"
                label="Title"
                placeholder="e.g., Clean up the park"
                register={register("title", {
                  required: "Task title is required",
                })}
                required
                error={errors.title?.message}
              />

              <div className="space-y-2">
                <label
                  htmlFor="taskDescription"
                  className="text-dark font-medium"
                >
                  Description
                </label>
                <textarea
                  id="taskDescription"
                  {...register("description", {
                    required: "Task description is required",
                  })}
                  name="description"
                  placeholder="e.g., Clean up the local park"
                  className="w-full px-3 py-2 border border-dark/20 focus:ring-accent focus:border-accent rounded-md h-24"
                  required
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-accent text-white hover:bg-accent/90 transition-all"
              >
                Create Task
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      </DialogContent>
    </Dialog>
  );
}
