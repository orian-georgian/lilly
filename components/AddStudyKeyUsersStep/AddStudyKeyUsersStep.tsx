import { FunctionComponent } from "react";
import { Flex, Text, Autocomplete } from "@mantine/core";
import { MantineForm } from "types";

import { IoIosSearch } from "react-icons/io";

interface AddStudyKeyUsersStepProps {
  form: MantineForm;
}

const labelStyles = {
  label: {
    fontWeight: 400,
  },
};

const AddStudyKeyUsersStep: FunctionComponent<AddStudyKeyUsersStepProps> = ({
  form,
}) => {
  return (
    <Flex direction="column" gap="lg">
      <Text fw={500}>Key Users</Text>
      <Autocomplete
        styles={labelStyles}
        label="Clinical Trial Project Manager"
        withAsterisk
        placeholder="Search for a person"
        rightSection={<IoIosSearch size={20} />}
        {...form.getInputProps("step2.projectManager")}
      />
      <Autocomplete
        styles={labelStyles}
        label="Value Evidence Outcomes Lead"
        withAsterisk
        placeholder="Search for a person"
        rightSection={<IoIosSearch size={20} />}
        {...form.getInputProps("step2.valueLead")}
      />
      <Autocomplete
        styles={labelStyles}
        label="Medical Lead"
        withAsterisk
        placeholder="Search for a person"
        rightSection={<IoIosSearch size={20} />}
        {...form.getInputProps("step2.medicalLead")}
      />
      <Autocomplete
        styles={labelStyles}
        label="Stats Lead / Data Manager"
        withAsterisk
        placeholder="Search for a person"
        rightSection={<IoIosSearch size={20} />}
        {...form.getInputProps("step2.dataManager")}
      />
    </Flex>
  );
};

export default AddStudyKeyUsersStep;
