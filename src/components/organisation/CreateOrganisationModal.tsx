"use client";

import { useForm } from "react-hook-form";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import FormField from "@/components/form/FormField";
import { toast } from "sonner";
import { OrganisationActions } from "@/components/organisation/utils";

const { createOrganisation } = OrganisationActions();

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
}

export default function CreateOrganisationModal({
  isOpen,
  setIsOpen,
}: CreateOrganisationModalProps) {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<OrganisationFormData>({
    defaultValues: {
      name: "",
      description: "",
      type: "NGO",
      address: "",
      address_line_one: "",
      address_line_two: "",
      address_line_county: "",
      address_line_city: "",
      address_line_postcode: "",
    },
  });

  const onSubmit = async (data: OrganisationFormData) => {
    try {
      const request = createOrganisation(
        data.name,
        data.description,
        data.type,
        data.address,
        data.address_line_one,
        data.address_line_two,
        data.address_line_county,
        data.address_line_city,
        data.address_line_postcode
      );
      const response = await request.res();

      if (response.status === 201) {
        toast.success("Organisation created successfully!", {
          duration: 5000,
        });
        setIsOpen(false);
        reset();
      } else {
        await request.json();
        toast.error("Failed to create organisation.", { duration: 5000 });
      }
    } catch (error) {
      console.error(error);
      toast.error("An error occurred. Please try again.", {
        duration: 5000,
      });
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
          Create Organisation
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-white">
        <DialogHeader>
          <DialogTitle className="text-dark">
            Create a New Organisation
          </DialogTitle>
          <DialogDescription className="text-dark/70">
            Fill in the details to add your organisation to Pebble.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            id="name"
            label="Name"
            placeholder="e.g., Splendid Desires"
            register={register("name", { required: "Name is required" })}
            required
            error={errors.name?.message}
          />
          <FormField
            id="description"
            label="Description"
            placeholder="e.g., Providing quality care"
            register={register("description", {
              required: "Description is required",
            })}
            required
            error={errors.description?.message}
          />
          <div className="space-y-2">
            <label htmlFor="type" className="text-dark font-medium">
              Type
            </label>
            <Select
              onValueChange={(value) =>
                setValue("type", value as "NGO" | "Charity", {
                  shouldValidate: true,
                })
              }
              defaultValue="NGO"
            >
              <SelectTrigger
                className={`border-dark/20 focus:ring-accent focus:border-accent ${
                  errors.type ? "border-red-500" : ""
                }`}
              >
                <SelectValue placeholder="Select type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="NGO">NGO</SelectItem>
                <SelectItem value="Charity">Charity</SelectItem>
              </SelectContent>
            </Select>
            {errors.type && (
              <p className="text-sm text-red-500 mt-1" role="alert">
                {errors.type.message || "Type is required"}
              </p>
            )}
            <input
              type="hidden"
              {...register("type", { required: "Type is required" })}
            />
          </div>
          <FormField
            id="address"
            label="Address"
            placeholder="e.g., Aston Student Village"
            register={register("address", { required: "Address is required" })}
            required
            error={errors.address?.message}
          />
          <FormField
            id="address_line_one"
            label="Address Line 1"
            placeholder="e.g., Unite Students Reception"
            register={register("address_line_one", {
              required: "Address Line 1 is required",
            })}
            required
            error={errors.address_line_one?.message}
          />
          <FormField
            id="address_line_two"
            label="Address Line 2"
            placeholder="e.g., Bagram Street"
            register={register("address_line_two")}
            error={errors.address_line_two?.message}
          />
          <FormField
            id="address_line_county"
            label="County"
            placeholder="e.g., West Midlands"
            register={register("address_line_county", {
              required: "County is required",
            })}
            required
            error={errors.address_line_county?.message}
          />
          <FormField
            id="address_line_city"
            label="City"
            placeholder="e.g., Birmingham"
            register={register("address_line_city", {
              required: "City is required",
            })}
            required
            error={errors.address_line_city?.message}
          />
          <FormField
            id="address_line_postcode"
            label="Postcode"
            placeholder="e.g., B4 7UP"
            register={register("address_line_postcode", {
              required: "Postcode is required",
            })}
            required
            error={errors.address_line_postcode?.message}
          />
          <Button
            type="submit"
            className="w-full bg-accent text-white hover:bg-accent/90 transition-all"
          >
            Create
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
