import { FunctionComponent, FormEvent } from "react";
import { Flex, Progress, Button, Divider } from "@mantine/core";
import { usePagination } from "@mantine/hooks";
import { useForm } from "@mantine/form";
import { MantineForm } from "types";
import { validateStepFields } from "@lilly/utils/form-validators";

interface MultiStepsFormProps {
  totalSteps: number;
  startFrom: number;
  submitText: string;
  formValues: object;
  formValidators: object;
  steps: FunctionComponent[];
  onCancel: () => void;
  onSubmit: (values: object) => void;
}

const MultiStepsForm: FunctionComponent<MultiStepsFormProps> = ({
  startFrom,
  totalSteps,
  formValues,
  formValidators,
  submitText,
  steps,
  onCancel,
  onSubmit,
}) => {
  const { active, next, previous } = usePagination({
    total: totalSteps,
    initialPage: startFrom,
  });

  const StepComponent: FunctionComponent<{ form: MantineForm }> =
    steps[active - 1];

  const form: any = useForm({
    initialValues: formValues,
    validate: formValidators,
  });

  const handleCancel = () => {
    if (onCancel) {
      onCancel();
    }
  };

  const handleNext = () => {
    const { errors } = form.validate();

    const errorInStep = Object.keys(errors).find((error) =>
      error.startsWith(`step${active}`)
    );

    if (!errorInStep) {
      form.clearErrors();
      next();
    }
  };

  const handleSubmit = (data: object) => {
    if (onSubmit) {
      onSubmit(data);
    }
  };

  const handleSubmitErrors = (errors: object) => {
    console.error(errors);
  };

  return (
    <Flex className="w-100" direction="column" gap="lg" maw={450}>
      <Progress.Root w="100%" size={20} radius="lg">
        <Progress.Section value={(active / totalSteps) * 100}>
          <Progress.Label>{`${active}/${totalSteps}`}</Progress.Label>
        </Progress.Section>
      </Progress.Root>
      <form
        onSubmit={form.onSubmit(handleSubmit, handleSubmitErrors)}
        noValidate
      >
        <StepComponent form={form} />

        <Divider my="sm" color="var(--mantine-color-red-2)" />

        <Flex gap="sm">
          {active === 1 && (
            <Button variant="outline" onClick={handleCancel}>
              Cancel
            </Button>
          )}
          {active > 1 && totalSteps > 1 && (
            <Button variant="outline" onClick={previous}>
              Previous
            </Button>
          )}
          {active < totalSteps && (
            <Button className="m-l-auto" onClick={handleNext}>
              Next
            </Button>
          )}
          {active === totalSteps && (
            <Button className="m-l-auto" type="submit">
              {submitText ?? "Submit"}
            </Button>
          )}
        </Flex>
      </form>
    </Flex>
  );
};

export default MultiStepsForm;
