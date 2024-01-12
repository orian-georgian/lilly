import {
  Paper,
  Flex,
  Text,
  Button,
  Divider,
  ActionIcon,
  LoadingOverlay,
} from "@mantine/core";
import { useId } from "@mantine/hooks";
import { DataTable } from "mantine-datatable";

import { FunctionComponent, useRef, RefObject } from "react";
import { SlPencil } from "react-icons/sl";
import { AiOutlineDelete } from "react-icons/ai";
import { PiExport } from "react-icons/pi";

import { useStudies } from "@lilly/hooks";
import { DrawerFormRef, Study } from "@lilly/types";
import { parseDateFromString } from "@lilly/utils/date-utils";
import { addStudyValidators } from "@lilly/utils/form-validators";
import { RecurrencePattern } from "@lilly/constants/recurrence-patterns";
import { QuestionnaireFrequency } from "@lilly/constants/questionnaire-frequencies";
import {
  DrawerForm,
  MultiStepsForm,
  AddStudyDataStep,
  AddStudyKeyUsersStep,
  AddStudyLocationStep,
  AddStudyHCPQuestionnairesStep,
  AddStudyPatientQuestionnairesStep,
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
  step2: {
    projectManager: null,
    valueLead: null,
    medicalLead: null,
    dataManager: null,
  },
  step3: {
    locations: [],
  },
  step4: {
    hcpQuestionnaires: [
      {
        questionnaire: null,
        recurrencePattern: RecurrencePattern.Weekly,
        frequency: QuestionnaireFrequency.EveryFourWeeks,
        occurrencesAmount: null,
        numberOfDays: null,
      },
    ],
  },
  step5: {
    patientQuestionnaires: [
      {
        questionnaire: null,
        recurrencePattern: RecurrencePattern.Weekly,
        frequency: QuestionnaireFrequency.EveryFourWeeks,
        occurrencesAmount: null,
        numberOfDays: null,
        mandatory: null,
      },
    ],
  },
};

interface StudiesManagementWidgetProps {}

const StudiesManagementWidget: FunctionComponent<
  StudiesManagementWidgetProps
> = () => {
  const {
    studies,
    currentStudy,
    isLoading,
    addStudy,
    editStudy,
    removeStudy,
    setCurrentStudy,
  } = useStudies();
  const id: string = useId();
  const isEdit: boolean = !!currentStudy;
  const drawerFormRef: RefObject<DrawerFormRef> = useRef<DrawerFormRef>(null);
  const newStudyFormSteps: FunctionComponent<any>[] = [
    AddStudyDataStep,
    AddStudyKeyUsersStep,
    AddStudyLocationStep,
    AddStudyHCPQuestionnairesStep,
    AddStudyPatientQuestionnairesStep,
  ];

  const handleAddNewStudyCancel = (isEdit: boolean): void => {
    if (isEdit) {
      setCurrentStudy(null);
    }
    drawerFormRef?.current?.close();
  };

  const handleSaveStudy = async (
    values: any,
    isEdit: boolean
  ): Promise<void> => {
    const flattenedObject = Object.assign({}, ...Object.values(values));
    const study = {
      ...flattenedObject,
      startDate: flattenedObject.startDate?.toLocaleDateString("en-GB"),
      endDate: flattenedObject.endDate?.toLocaleDateString("en-GB"),
      ...(isEdit ? {} : { id }),
    };

    const { isOk } = await (isEdit ? editStudy : addStudy)(study);

    if (isEdit) {
      setCurrentStudy(null);
    }

    if (isOk) {
      drawerFormRef?.current?.close();
    }
  };

  const mapStudyToFormData = (study?: Study): object => {
    if (!study) {
      return {};
    }

    const {
      id,
      code,
      title,
      description,
      disease,
      startDate,
      endDate,
      patientsTotal,
      papers,
      projectManager,
      valueLead,
      medicalLead,
      dataManager,
      locations,
      hcpQuestionnaires,
      patientQuestionnaires,
    } = study;

    return {
      step1: {
        id,
        code,
        title,
        description,
        disease,
        startDate: parseDateFromString(startDate),
        endDate: parseDateFromString(endDate),
        patientsTotal,
        papers,
      },
      step2: {
        projectManager,
        valueLead,
        medicalLead,
        dataManager,
      },
      step3: {
        locations,
      },
      step4: {
        hcpQuestionnaires,
      },
      step5: {
        patientQuestionnaires,
      },
    };
  };

  const handleEditStudy = (study: Study) => (): void => {
    setCurrentStudy(study);
    drawerFormRef?.current?.open();
  };

  const handleRemoveStudy = (studyId: string) => (): void => {
    removeStudy(studyId);
  };

  const handleOpenAddStudy = () => {
    drawerFormRef?.current?.open();
  };

  return (
    <Paper shadow="lg" p="lg" radius="lg" pos="relative" withBorder>
      <LoadingOverlay
        visible={isLoading}
        overlayProps={{ radius: "sm", blur: 1, zIndex: 2 }}
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
            accessor: "locations",
            title: "Country/Region/Site",
            render: ({ locations }) =>
              `${locations.length} ${
                locations.length === 1 ? "location" : "locations"
              }`,
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
            accessor: "patientsTotal",
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
            render: ({ hcpQuestionnaires }) => hcpQuestionnaires.length,
          },
          {
            accessor: "patientQuestionnaires",
            title: "Patient Quest.",
            textAlign: "right",
            render: ({ patientQuestionnaires }) => patientQuestionnaires.length,
          },
          {
            accessor: "del",
            title: "Delete",
            width: "0%",
            textAlign: "center",
            render: ({ id }) => (
              <ActionIcon
                size="md"
                variant="subtle"
                color="lilly-red"
                onClick={handleRemoveStudy(id)}
              >
                <AiOutlineDelete size={20} />
              </ActionIcon>
            ),
          },
          {
            accessor: "ed",
            title: "Edit",
            width: "0%",
            textAlign: "center",
            render: (study) => (
              <ActionIcon
                size="md"
                variant="subtle"
                color="lilly-red"
                onClick={handleEditStudy(study)}
              >
                <SlPencil size={16} />
              </ActionIcon>
            ),
          },
          {
            accessor: "inv",
            title: "Export",
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
      <DrawerForm
        ref={drawerFormRef}
        loading={isLoading}
        title={`${isEdit ? "Edit" : "Add a"} study`}
      >
        <MultiStepsForm
          isEdit={isEdit}
          totalSteps={newStudyFormSteps.length}
          startFrom={1}
          submitText={`${isEdit ? "Edit" : "Add"} study`}
          formValues={initialNewStudytFormValues}
          formValidators={addStudyValidators}
          steps={newStudyFormSteps}
          onCancel={handleAddNewStudyCancel}
          onSubmit={handleSaveStudy}
          {...(isEdit
            ? {
                editedItem: currentStudy
                  ? mapStudyToFormData(currentStudy)
                  : {},
              }
            : {})}
        />
      </DrawerForm>
    </Paper>
  );
};

export default StudiesManagementWidget;
