"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

type Skill = {
  uuid: string;
  name: string;
  description?: string;
};

interface ManageSkillsModalProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

export default function ManageSkillsModal({
  isOpen,
  setIsOpen,
}: ManageSkillsModalProps) {
  const initialSkills: Skill[] = [
    { uuid: "1", name: "Gardening", description: "Planting and maintaining gardens" },
    { uuid: "2", name: "Tutoring", description: "Educational support for students" },
    { uuid: "3", name: "Cooking", description: "Preparing meals for communities" },
    { uuid: "4", name: "Carpentry", description: "Woodworking and repairs" },
    { uuid: "5", name: "Painting", description: "Artistic and decorative painting" },
    { uuid: "6", name: "Plumbing", description: "Fixing pipes and water systems" },
    { uuid: "7", name: "IT Support", description: "Technical assistance and troubleshooting" },
    { uuid: "8", name: "Event Planning", description: "Organising community events" },
  ];

  const [userSkills, setUserSkills] = useState<Skill[]>([
    initialSkills[0],
    initialSkills[1],
    initialSkills[2],
  ]); 

  const toggleSkill = (skillUuid: string) => {
    const skill = initialSkills.find((s) => s.uuid === skillUuid)!;
    const isUserSkill = userSkills.some((s) => s.uuid === skillUuid);

    if (isUserSkill) {
      setUserSkills(userSkills.filter((s) => s.uuid !== skillUuid));
      toast.success(`Skill "${skill.name}" removed successfully!`, { duration: 5000 });
    } else {
      setUserSkills([...userSkills, skill]);
      toast.success(`Skill "${skill.name}" added successfully!`, { duration: 5000 });
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className="bg-accent text-white hover:bg-accent/90 transition-all flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14" />
            <path d="M12 5v14" />
          </svg>
          Manage Skills
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[525px] bg-white">
        <DialogHeader>
          <DialogTitle className="text-dark">Manage Your Skills</DialogTitle>
          <DialogDescription className="text-dark/70">
            Add or remove skills to enhance your tasks and contributions.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4 max-h-[60vh] overflow-y-auto">
          {initialSkills.map((skill) => (
            <button
              key={skill.uuid}
              onClick={() => toggleSkill(skill.uuid)}
              className={`w-full px-4 py-2 rounded-full border flex items-center justify-between transition-all ${
                userSkills.some((s) => s.uuid === skill.uuid)
                  ? "bg-[#A3D9B1] border-[#A3D9B1] text-dark hover:bg-[#A3D9B1]/80"
                  : "bg-white border-dark/20 text-dark/80 hover:bg-dark/10"
              }`}
              type="button"
            >
              <span>{skill.name}</span>
              <span className="text-xs text-dark/60">
                ({skill.description || "No description"})
              </span>
            </button>
          ))}
        </div>
        <div className="mt-4 text-center">
          <Button
            onClick={() => setIsOpen(false)}
            className="bg-dark text-white hover:bg-dark/90"
          >
            Close
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}