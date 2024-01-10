import {
  Paper,
  Flex,
  Text,
  Button,
  Divider,
  ActionIcon,
  LoadingOverlay,
} from "@mantine/core";
import { DataTable } from "mantine-datatable";

import { FunctionComponent, useRef, RefObject } from "react";
import { SlPencil } from "react-icons/sl";
import { AiOutlineDelete } from "react-icons/ai";
import { PiExport } from "react-icons/pi";

import { useStudies } from "@lilly/hooks";
import { DrawerFormRef } from "@lilly/types";
import { addStudyValidators } from "@lilly/utils/form-validators";
import {
  DrawerForm,
  MultiStepsForm,
  AddStudyDataStep,
} from "@lilly/components";

const initialNewStudytFormValues = {
  step1: {
    code: "",
    title: "",
    description: "",
    disease: "",
    startDate: new Date(),
    endDate: new Date(),
    patientsTotal: "",
    papers: "",
  },
};

interface StudiesManagementWidgetProps {}

const StudiesManagementWidget: FunctionComponent<
  StudiesManagementWidgetProps
> = () => {
  const { studies, isLoading } = useStudies();
  const drawerFormRef: RefObject<DrawerFormRef> = useRef<DrawerFormRef>(null);
  const newStudyFormSteps: FunctionComponent<any>[] = [AddStudyDataStep];

  const handleAddNewStudyCancel = () => {
    drawerFormRef?.current?.close();
  };

  const handleSaveStudy = () => {};

  const handleOpenAddStudy = () => {
    drawerFormRef?.current?.open();
  };

  return (
    <Paper shadow="lg" p="lg" radius="lg" pos="relative" withBorder>
      <LoadingOverlay
        visible={isLoading}
        zIndex={1000}
        overlayProps={{ radius: "sm", blur: 1 }}
        loaderProps={{ color: "lilly-red" }}
      />
      <Flex align="center">
        <Text fw={500}>{`${studies.length} ${
          studies.length === 1 ? "Study" : "Studies"
        }`}</Text>
        <Button
          className="m-l-auto"
          variant="outline"
          onClick={handleOpenAddStudy}
        >
          Add Study
        </Button>
      </Flex>

      <Divider my="xs" color="var(--mantine-color-red-2)" />
      <DataTable
        records={studies}
        minHeight={200}
        columns={[
          {
            accessor: "code",
            title: "Code",
            sortable: true,
          },
          {
            accessor: "title",
            width: 150,
            title: "Title",
          },
          {
            accessor: "disease",
            title: "Disease",
          },
          {
            accessor: "medicalLead",
            title: "Medical Lead",
          },
          {
            accessor: "numberOfLocations",
            title: "Country/Region/Site",

            render: ({ numberOfLocations }) => `${numberOfLocations} locations`,
          },
          {
            accessor: "startDate",
            title: "Start Date",
          },
          {
            accessor: "endDate",
            title: "End Date",
          },
          {
            accessor: "totalPatients",
            title: "Total Patients",
            textAlign: "right",
          },
          {
            accessor: "papers",
            title: "Papers",
            textAlign: "right",
          },
          {
            accessor: "hpcQuestionnaires",
            title: "HPC Quest.",
            textAlign: "right",
          },
          {
            accessor: "patientQuestionnaires",
            title: "Patient Quest.",
            textAlign: "right",
          },
          {
            accessor: "del",
            title: "Delete",
            width: "0%",
            textAlign: "center",
            render: () => (
              <ActionIcon size="md" variant="subtle" color="lilly-red">
                <AiOutlineDelete size={20} />
              </ActionIcon>
            ),
          },
          {
            accessor: "ed",
            title: "Edit",
            width: "0%",
            textAlign: "center",
            render: () => (
              <ActionIcon size="md" variant="subtle" color="lilly-red">
                <SlPencil size={16} />
              </ActionIcon>
            ),
          },
          {
            accessor: "inv",
            title: "Invite",
            width: "0%",
            textAlign: "center",
            render: () => (
              <ActionIcon size="md" variant="subtle" color="lilly-red">
                <PiExport size={20} />
              </ActionIcon>
            ),
          },
        ]}
      />
      <DrawerForm ref={drawerFormRef} title="Add a study">
        <MultiStepsForm
          totalSteps={newStudyFormSteps.length}
          startFrom={1}
          submitText="Add study"
          formValues={initialNewStudytFormValues}
          formValidators={addStudyValidators}
          steps={newStudyFormSteps}
          onCancel={handleAddNewStudyCancel}
          onSubmit={handleSaveStudy}
        />
      </DrawerForm>
    </Paper>
  );
};

export default StudiesManagementWidget;
