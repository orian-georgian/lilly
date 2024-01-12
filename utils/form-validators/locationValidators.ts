import { isNotEmpty, matches } from "@mantine/form";

const locationValidators = {
  location: isNotEmpty("Select a country"),
  region: isNotEmpty("Select a region"),
  site: isNotEmpty("Select a site"),
  approvalDate: isNotEmpty("Select a date"),
  patientsTotal: matches(/^[1-9]\d*$/, "Please enter a valid number"),
};

export default locationValidators;
