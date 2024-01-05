import { FunctionComponent, FormEvent } from "react";
import { Flex, Progress, Button, Divider } from "@mantine/core";
import { usePagination } from "@mantine/hooks";
import { useForm } from "@mantine/form";

interface MultiStepsFormProps {
  totalSteps: number;
  startFrom: number;
  submitText: string;
  formValues: object;
  formValidators: object;
  steps: [];
  onCancel: () => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
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
  const StepComponent: FunctionComponent<{ form: object }> = steps[active - 1];
  const form = useForm({
    initialValues: formValues,
    validate: formValidators,
  });

  const handleCancel = () => {
    if (onCancel) {
      onCancel();
    }
  };

  const handleNext = () => {
    const { hasErrors } = form.validate();
    if (!hasErrors) {
      next();
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    form.onSubmit(console.log);
  };

  return (
    <Flex className="w-100" direction="column" gap="lg" maw={400}>
      <Progress.Root w="100%" size={20} radius="lg">
        <Progress.Section value={(active / totalSteps) * 100}>
          <Progress.Label>{`${active}/${totalSteps}`}</Progress.Label>
        </Progress.Section>
      </Progress.Root>
      <form onSubmit={handleSubmit} noValidate>
        <StepComponent form={form} />
      </form>
      <Divider color="var(--mantine-color-red-2)" />
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
    </Flex>
  );
};

export default MultiStepsForm;
