import { isNotEmpty } from "@mantine/form";

const addVisitValidators = {
  visitType: isNotEmpty("Enter a visit type"),
};

export default addVisitValidators;
