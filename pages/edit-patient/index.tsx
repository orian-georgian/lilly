import { EditPatientDataForm, EditPatientHeader } from "@lilly/components";
import { Flex } from "@mantine/core";

function EditPatient() {
  return (
    <Flex className="w-100" direction="column" gap="lg">
      <EditPatientHeader />
      <EditPatientDataForm />
    </Flex>
  );
}

export default EditPatient;
