import { MantineForm } from "types";

const validateStepFields = (form: MantineForm, groupName: string): string[] => {
  const formValues = (
    form.values as {
      [key: string]: object;
    }
  )[groupName];
  const validationErrors: string[] = [];

  for (const key in formValues) {
    console.log(key);
    if (formValues.hasOwnProperty(key)) {
      const value = (
        formValues as {
          [key: string]: object;
        }
      )[key];
      const { hasError, error } = form.validateField(`${groupName}.${key}`);

      if (hasError) {
        validationErrors.push(error);
      } else {
        if (typeof value === "object") {
          const nestedValidationErrors = validateStepFields(
            form,
            `${groupName}.${key}`
          );
          validationErrors.push(...nestedValidationErrors);
        }
      }
    }
  }

  return validationErrors;
};

export default validateStepFields;
