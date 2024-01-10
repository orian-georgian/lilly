import {
  TextInput,
  Paper,
  Table,
  Badge,
  Radio,
  Flex,
  Divider,
  Text,
  Button,
  UnstyledButton,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { SlPencil } from "react-icons/sl";
import { LiaClipboardCheckSolid } from "react-icons/lia";
import { IoIosSearch } from "react-icons/io";

import { useHCPDashboard } from "@lilly/hooks";
import {
  getColorByTimeSinceDiagnosis,
  getColorByPatientDataStatus,
  getColorByPatientStatus,
} from "@lilly/utils";

import {
  addVisitValidators,
  newPatientValidators,
} from "@lilly/utils/form-validators";
import {
  PatientDataStatuses,
  PatientStatuses,
  DiseaseActivities,
} from "@lilly/constants";

import {
  DrawerForm,
  MultiStepsForm,
  AddNewVisitDataStep,
  AddNewVisitQuestionnairesStep,
} from "@lilly/components";

import { useRef } from "react";
import { PatientStudyDataStep } from "../PatientStudyDataStep";
import { PatientDemographicDataFirstStep } from "../PatientDemographicDataFirstStep";
import { PatientDemographicDataSecondStep } from "../PatientDemographicDataSecondStep";
import { PatientMedicationHistoryStep } from "../PatientMedicationHistoryStep";
import { PatientBaselineMedicationStep } from "../PatientBaselineMedicationStep";
import { PatientCDAIStep } from "../PatientCDAIStep";
import { PatientDAPSAStep } from "../PatientDAPSAStep";
import { PatientWellnessDataStep } from "../PatientWellnessDataStep";
import { PatientSleepDisturbanceStep } from "../PatientSleepDisturbanceStep";
import { useRouter } from "next/router";

const initialNewVisitFormValues = {
  step1: {
    visitDate: new Date(),
    visitType: null,
    assessmentDate: null,
    entryDate: null,
    baselineTreatment: "",
    whyNot: "",
  },
  step2: {
    diseaseActivities: [
      { id: 1, questionnaireName: "CDAI", date: "12/12/23", score: 20 },
      {
        id: 2,
        questionnaireName: "DAPSA",
        date: "12/11/23",
        score: 25,
      },
    ],
    patientQuestionnaires: [
      { id: 1, questionnaireName: "WHO-5", date: "12/12/23", score: 57 },
      {
        id: 2,
        questionnaireName: "EQ-5D",
        date: "12/11/23",
        score: 95,
      },
    ],
  },
};

const initialNewPatientFormValues = {
  step1: {
    study: null,
    country: null,
    disease: null,
    visitedAt: new Date(),
    prescribedAt: null,
  },
  step2: {
    id: "1111",
    email: "",
    nationality: null,
    language: null,
    dob: null,
    age: "",
    weight: "",
    weightUnit: "kg",
    height: "",
    heightUnit: "cm",
    bmi: "",
    bmiCategory: "",
  },
  step3: {
    sex: "",
    primaryEmployment: "",
    educationStatus: "",
    smokingStatus: "",
    diagnosisDate: null,
    diseaseEvolution: "",
  },
  step4: {
    csDMARDUsed: [],
    btsDMARDUsed: [{ treatment: [], start: null, end: null }],
  },
  step5: {
    csDMARDBaseline: [],
    corticosteroidBaseline: [],
    btsDMARDBaseline: [{ treatment: [], start: null, end: null }],
  },
  step6: {
    cdai: [
      { id: DiseaseActivities.Enum.TenderJointCount, score: 0 },
      { id: DiseaseActivities.Enum.SwollenJointCount, score: 0 },
      { id: DiseaseActivities.Enum.PatientGlobal, score: 0 },
      { id: DiseaseActivities.Enum.HcpGlobal, score: 0 },
    ],
  },
  step7: {
    dapsa: [
      { id: DiseaseActivities.Enum.TenderJointCount, score: 0 },
      { id: DiseaseActivities.Enum.SwollenJointCount, score: 0 },
      { id: DiseaseActivities.Enum.PatientPainVas, score: 0 },
      { id: DiseaseActivities.Enum.PatientGlobalDiseaseVas, score: 0 },
      { id: DiseaseActivities.Enum.EvaluatorGlobalDiseaseVas, score: 0 },
    ],
  },
  step8: {
    walking: "",
    stretching: "",
    flowingMovements: "",
    workingOutInWater: "",
    cycling: "",
    strengthTraining: "",
    handExercise: "",
    dietaryIntake: "",
  },
  step9: {
    sleepTrouble: "",
    nightWakeUp: "",
    troubleStayingSleep: "",
    feelingTired: "",
  },
};

export default function HCPPatientsWidget() {
  const {
    isLoading,
    patients,
    selectedPatientId,
    setSelectedPatientId,
    filterPatients,
  } = useHCPDashboard();

  const { push } = useRouter();

  const isMobile = useMediaQuery("(max-width: 600px)");

  const drawerAddVisitFormRef = useRef(null);

  const drawerNewPatientFormRef = useRef(null);

  const newVisitFormSteps = [
    AddNewVisitDataStep,
    AddNewVisitQuestionnairesStep,
  ];

  const newPatientFormSteps = [
    PatientStudyDataStep,
    PatientDemographicDataFirstStep,
    PatientDemographicDataSecondStep,
    PatientMedicationHistoryStep,
    PatientBaselineMedicationStep,
    PatientCDAIStep,
    PatientDAPSAStep,
    PatientWellnessDataStep,
    PatientSleepDisturbanceStep,
  ];

  const handleChangeSelection = (patientId) => () => {
    setSelectedPatientId(patientId);
  };

  const handleAddNewVisit = (e) => {
    e.stopPropagation();
    drawerAddVisitFormRef.current?.open();
  };

  const handleAddNewVisitCancel = () => {
    drawerAddVisitFormRef.current?.close();
  };

  const handleCreateNewPatient = (e) => {
    e.stopPropagation();
    drawerNewPatientFormRef.current?.open();
  };

  const handleCreateNewPatientCancel = (e) => {
    drawerNewPatientFormRef.current?.close();
  };

  const handleSaveVisit = (values) => {
    console.log(values);
    drawerAddVisitFormRef.current?.close();
  };

  const rows = patients.map(
    ({
      patientId,
      age,
      timeSinceDiagnosis,
      nrOfPrevDmards,
      cdaiAtBaseline,
      dapsaAtBaseline,
      meanChangesCdai,
      meanChangesDapsa,
      dataStatus,
      status,
    }) => (
      <Table.Tr
        key={patientId}
        bg={
          selectedPatientId === patientId
            ? "var(--mantine-color-lilly-red-light)"
            : undefined
        }
      >
        <Table.Td w={70}>
          <Radio
            aria-label="Select row"
            checked={selectedPatientId === patientId}
            onChange={handleChangeSelection(patientId)}
          />
        </Table.Td>
        <Table.Td miw={105}>{patientId}</Table.Td>
        <Table.Td miw={40}>{age}</Table.Td>
        <Table.Td miw={115}>
          <Badge
            variant="outline"
            color={getColorByTimeSinceDiagnosis(timeSinceDiagnosis)}
            size="md"
            radius="sm"
            fullWidth
          >{`${timeSinceDiagnosis} ${
            timeSinceDiagnosis === 1 ? "year" : "years"
          }`}</Badge>
        </Table.Td>
        <Table.Td miw={105} align="right">
          {nrOfPrevDmards}
        </Table.Td>
        <Table.Td miw={75} align="right">
          {cdaiAtBaseline}
        </Table.Td>
        <Table.Td miw={85} align="right">
          {dapsaAtBaseline}
        </Table.Td>
        <Table.Td miw={150} align="right">
          {meanChangesCdai}
        </Table.Td>
        <Table.Td miw={150} align="right">
          {meanChangesDapsa}
        </Table.Td>
        <Table.Td miw={130}>
          <Badge
            variant="outline"
            color={getColorByPatientDataStatus(dataStatus)}
            size="md"
            radius="sm"
            fullWidth
          >
            {
              PatientDataStatuses.List?.find(
                (pStatus) => pStatus.value === dataStatus
              )?.label
            }
          </Badge>
        </Table.Td>
        <Table.Td miw={95}>
          <Badge
            variant="outline"
            color={getColorByPatientStatus(status)}
            size="md"
            radius="sm"
            fullWidth
          >
            {
              PatientStatuses.List?.find((pStatus) => pStatus.value === status)
                ?.label
            }
          </Badge>
        </Table.Td>
        <Table.Td w={40} align="center">
          <UnstyledButton onClick={() => push("/edit-patient")}>
            <SlPencil color={`var(--mantine-color-lilly-red-7)`} />
          </UnstyledButton>
        </Table.Td>
        <Table.Td w={45} align="center">
          <UnstyledButton onClick={handleAddNewVisit}>
            <LiaClipboardCheckSolid
              size={20}
              color={`var(--mantine-color-lilly-red-7)`}
            />
          </UnstyledButton>
        </Table.Td>
      </Table.Tr>
    )
  );

  const noData = (
    <Table.Tr>
      <Table.Td p="xl" colSpan={13}>
        <Text ta="center">No data available</Text>
      </Table.Td>
    </Table.Tr>
  );

  return (
    <Paper shadow="lg" p="lg" radius="lg" withBorder>
      <Flex align="center" gap="lg" wrap="wrap">
        <Text fw={500}>{`${patients.length} ${
          patients.length === 1 ? "Patient" : "Patients"
        }`}</Text>
        <TextInput
          placeholder="Search Patient ID"
          className="m-l-auto"
          w={isMobile ? "100%" : "auto"}
          leftSection={<IoIosSearch size={20} />}
          onChange={filterPatients}
        />
        <Button
          fullWidth={isMobile}
          variant="outline"
          onClick={handleCreateNewPatient}
        >
          Add New Patient
        </Button>
      </Flex>
      <Divider my="xs" color="var(--mantine-color-red-2)" />
      <Table.ScrollContainer h={200}>
        <Table>
          <Table.Thead>
            <Table.Tr>
              <Table.Th />
              <Table.Th>Patient ID</Table.Th>
              <Table.Th>Age</Table.Th>
              <Table.Th>Time since diagnosis (yrs)</Table.Th>
              <Table.Th align="right"># of Previous b/tsDMARDS</Table.Th>
              <Table.Th align="right">CDAI at baseline</Table.Th>
              <Table.Th align="right">DAPSA at baseline</Table.Th>
              <Table.Th align="right">
                Mean changes from baseline in CDAI
              </Table.Th>
              <Table.Th align="right">
                Mean changes from baseline in DAPSA
              </Table.Th>
              <Table.Th>Data Status</Table.Th>
              <Table.Th>Status</Table.Th>
              <Table.Th>Edit</Table.Th>
              <Table.Th>Add Visit</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{rows.length > 0 ? rows : noData}</Table.Tbody>
        </Table>
      </Table.ScrollContainer>
      <DrawerForm ref={drawerAddVisitFormRef} title="Add a new visit">
        <MultiStepsForm
          totalSteps={newVisitFormSteps.length}
          startFrom={1}
          submitText="Add visit"
          formValues={initialNewVisitFormValues}
          formValidators={addVisitValidators}
          steps={newVisitFormSteps}
          onCancel={handleAddNewVisitCancel}
          onSubmit={handleSaveVisit}
        />
      </DrawerForm>
      <DrawerForm ref={drawerNewPatientFormRef} title="Create a new Patient">
        <MultiStepsForm
          totalSteps={newPatientFormSteps.length}
          startFrom={1}
          submitText="Create Patient"
          formValues={initialNewPatientFormValues}
          formValidators={newPatientValidators}
          steps={newPatientFormSteps}
          onCancel={handleCreateNewPatientCancel}
        />
      </DrawerForm>
    </Paper>
  );
}
