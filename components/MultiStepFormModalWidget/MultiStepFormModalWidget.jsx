import { useMultiStepForm } from "@lilly/hooks/useMultiStepForm";
import { Button, Modal, Box, Flex, Progress, Group } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

export default function MultiStepFormModalWidget({
  isMobile = false,
  form,
  steps = [],
  btnTitle,
  btnVariant,
  modalTitle,
}) {
  const [opened, { close, open }] = useDisclosure();

  const {
    currentStepIndex,
    totalSteps,
    step,
    next,
    back,
    isFirstStep,
    isLastStep,
  } = useMultiStepForm(steps);

  return (
    <>
      <Button fullWidth={isMobile} variant={btnVariant} onClick={open}>
        {btnTitle}
      </Button>
      <Modal
        opened={opened}
        onClose={close}
        title={modalTitle}
        styles={{
          root: {
            padding: 20,
          },
          title: {
            fontWeight: 700,
            fontSize: 30,
          },
        }}
      >
        <Box mx="auto">
          <Flex direction="column" gap={20}>
            <Progress.Root size="xl" styles={{ root: { borderRadius: 10 } }}>
              <Progress.Section
                value={((currentStepIndex + 1) / totalSteps) * 100}
              >
                <Progress.Label>
                  {currentStepIndex + 1}/{totalSteps}
                </Progress.Label>
              </Progress.Section>
            </Progress.Root>
            <form onSubmit={form.onSubmit((values) => console.log(values))}>
              <Flex direction="column" gap={20}>
                {step}
                <div className="lilly-patientProfile__data-divider" />
                <Group justify="space-between">
                  {!isFirstStep ? (
                    <Button type="button" onClick={back} variant="outline">
                      Previous
                    </Button>
                  ) : (
                    <Button type="button" onClick={close} variant="outline">
                      Cancel
                    </Button>
                  )}
                  {!isLastStep ? (
                    <Button
                      type="button"
                      onClick={(event) => {
                        event.preventDefault();
                        event.stopPropagation();
                        next();
                      }}
                    >
                      Next
                    </Button>
                  ) : (
                    <Button type="submit">Submit</Button>
                  )}
                </Group>
              </Flex>
            </form>
          </Flex>
        </Box>
      </Modal>
    </>
  );
}
