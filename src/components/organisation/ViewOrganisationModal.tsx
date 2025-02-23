"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

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
      </DialogContent>
    </Dialog>
  );
}
