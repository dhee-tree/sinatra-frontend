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
import ViewOrganisationModal from "@/components/organisation/ViewOrganisationModal";

type OrganisationFormData = {
  uuid: string;
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

export default function UserOrganisations() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const {
    data: organisationData,
    error,
    isLoading,
  } = useSWR<OrganisationFormData[]>("api/organisations/my", Fetcher);

  if (error) {
    toast.error("Failed to load organisations. Please try again.", {
      duration: 5000,
    });
  }

  const organisations = organisationData;

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
            <path d="M3 21v-6a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v6" />
            <path d="M7 11V7a4 4 0 0 1 8 0v4" />
          </svg>
          Your Organisations
        </CardTitle>
        <CardDescription className="text-dark/70">
          Manage your organisations
        </CardDescription>
      </CardHeader>
      <CardContent>
        {isLoading ? (
          <p className="text-dark/80">Loading organisations...</p>
        ) : error ? (
          <p className="text-red-500">Error loading organisations.</p>
        ) : organisations?.length === 0 ? (
          <p className="text-dark/80">
            You have not created any organisations yet.
          </p>
        ) : (
          <>
            <ul className="space-y-4">
              {organisationData?.map((org) => (
                <li key={org.uuid} className="border-b border-dark/20 pb-2">
                  <ViewOrganisationModal
                    organisationData={org}
                    isOpen={isDialogOpen}
                    setIsOpen={setIsDialogOpen}
                  />

                  <p className="text-dark/80 text-sm">{org.description}</p>
                  <p className="text-dark/60 text-sm">Type: {org.type}</p>
                </li>
              ))}
            </ul>
          </>
        )}
      </CardContent>
    </Card>
  );
}
