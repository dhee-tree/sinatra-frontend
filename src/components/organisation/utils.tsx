import { api } from "@/components/signup/utils";
import { LoginActions } from "@/components/login/utils";

const createOrganisation = (
  name: string,
  description: string,
  type: string,
  address: string,
  address_line_one: string,
  address_line_two: string,
  address_line_county: string,
  address_line_city: string,
  address_line_postcode: string
) => {
  const { getAccessToken } = LoginActions();
  const token = getAccessToken();
  if (!token) {
    console.warn("No access token found in cookies");
  }

  return api
    .headers({
      Authorization: `Bearer ${token}`,
    })
    .post(
      {
        name,
        description,
        type,
        address,
        address_line_one,
        address_line_two,
        address_line_county,
        address_line_city,
        address_line_postcode,
      },
      "/api/organisations/"
    );
};

export const OrganisationActions = () => {
  return {
    createOrganisation,
  };
};
