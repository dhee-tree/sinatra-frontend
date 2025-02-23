"use client";

import useSWR from "swr";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { toast } from "sonner";
import { Fetcher } from "@/components/utils/Fetcher";
import ViewTaskModal from "./ViewTaskModal";

type TaskData = {
  uuid: string;
  title: string;
  description: string;
};

type TaskPage = {
  count: number;
  next: string;
  previous: string;
  results: TaskData[];
};

export default function AllTasks() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const {
    data: taskData,
    error,
    isLoading,
  } = useSWR<TaskPage>("api/listings/", Fetcher);

  if (error) {
    toast.error("Failed to load tasks. Please try again.", { duration: 5000 });
  }

  const tasks = taskData?.results;

  return (
    <Card className="bg-white shadow-xl">
      <CardHeader>
        <CardTitle className="text-xl font-bold text-dark flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#5A7D7C"
            strokeWidth="2"
          >
            <path d="M3 3h18v18H3z" />
            <path d="M7 7h10v10H7z" />
          </svg>
          All Tasks
        </CardTitle>
        <CardDescription className="text-dark/70">
          Pick a task to contribute
        </CardDescription>
      </CardHeader>
      <CardContent>
        {isLoading ? (
          <p className="text-dark/80">Loading tasks...</p>
        ) : error ? (
          <p className="text-red-500">Error loading tasks.</p>
        ) : tasks?.length === 0 ? (
          <p className="text-dark/80">No tasks available at the moment.</p>
        ) : (
          <>
            <ul className="space-y-4">
              {tasks?.map((task) => (
                <li key={task.uuid} className="border-b border-dark/20 pb-2">
                  <ViewTaskModal
                    taskData={task}
                    isOpen={isDialogOpen}
                    setIsOpen={setIsDialogOpen}
                  />
                  <p className="text-dark/80 text-sm">{task.description}</p>
                </li>
              ))}
            </ul>
          </>
        )}
      </CardContent>
    </Card>
  );
}
