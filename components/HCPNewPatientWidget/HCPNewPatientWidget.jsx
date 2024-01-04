import { NumberInput, Flex, Group, Paper, Text, Table } from "@mantine/core";
import { useForm } from "@mantine/form";
import { MultiStepFormModalWidget } from "../MultiStepFormModalWidget";
import { FormWrapperWidget } from "../FormWrapperWidget";
import { MdOutlineArrowDownward, MdOutlineArrowUpward } from "react-icons/md";
import { useState } from "react";
import { randomId } from "@mantine/hooks";
import StudyData from "./StudyData";
import DemographicDataOne from "./DemographicDataOne";
import DemographicDataTwo from "./DemographicDataTwo";
import MedicationHistory from "./MedicationHistory";
import BaselineMedication from "./BaselineMedication";
import WellnessData from "./WellnessData";
import SleepDisturbance from "./SleepDisturbance";

export const YES_NO = [
  { value: "Y", label: "Yes" },
  { value: "N", label: "No" },
];

export const SLEEP_DISTURBANCE = [
  { value: "0", label: "Not at all" },
  { value: "1", label: "1-3 days" },
  { value: "2", label: "4-7 days" },
  { value: "3", label: "8-14 days" },
  { value: "4", label: "15-21 days" },
  { value: "5", label: "22-31 days" },
];

export const Null = () => null;

function DiseaseTable({ rows = [], form }) {
  console.log(form);
  console.log(rows);

  const [sort, setSort] = useState("desc");

  const sortedRows = [...rows].sort((a, b) => {
    if (sort === "asc") {
      return a.label.localeCompare(b.label);
    }

    return b.label.localeCompare(a.label);
  });

  return (
    <Paper shadow="lg" p="lg" radius="lg" withBorder>
      <Table styles={{ th: { width: "70%" } }}>
        <Table.Thead>
          <Table.Tr>
            <Table.Th
              w="70%"
              style={{ cursor: "pointer" }}
              onClick={() => setSort(sort === "asc" ? "desc" : "asc")}
            >
              <Flex gap={8} align="center">
                Count Group
                <Text></Text>
                {sort === "asc" ? (
                  <MdOutlineArrowUpward />
                ) : (
                  <MdOutlineArrowDownward />
                )}
              </Flex>
            </Table.Th>
            <Table.Th>Score</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {sortedRows.map(({ label, Input, input }) => (
            <Table.Tr key={randomId()}>
              <Table.Td>{label}</Table.Td>
              <Table.Td>
                <NumberInput
                  {...form.getInputProps(input)}
                  rightSection={<Null />}
                />
              </Table.Td>
            </Table.Tr>
          ))}
        </Table.Tbody>
      </Table>
    </Paper>
  );
}

function DiseaseActivityCDAI({ form }) {
  const rows = [
    {
      label: "Tender Joint Count",
      input: "cdai.tenderJointCount",
      Input: () => (
        <NumberInput
          {...form.getInputProps("cdai.tenderJointCount")}
          rightSection={<Null />}
        />
      ),
      //value: form.values.cdai.tenderJointCount,
    },
    {
      label: "Swollen Joint Count",
      input: "cdai.swollenJointCount",

      Input: () => (
        <NumberInput
          {...form.getInputProps("cdai.swollenJointCount")}
          rightSection={<Null />}
        />
      ),
      //value: form.values.cdai.swollenJointCount,
    },
    {
      label: "Patient Global",
      input: "cdai.globalPatient",

      Input: () => (
        <NumberInput
          {...form.getInputProps("cdai.globalPatient")}
          rightSection={<Null />}
        />
      ),
      //value: form.values.cdai.globalPatient,
    },
    {
      label: "HCP Global",
      input: "cdai.globalHCP",
      Input: () => (
        <NumberInput
          {...form.getInputProps("cdai.globalHCP")}
          rightSection={<Null />}
        />
      ),
      //value: form.values.cdai.globalHCP,
    },
  ];

  return (
    <FormWrapperWidget title="Disease Activity: CDAI">
      <DiseaseTable {...{ rows, form }} />
    </FormWrapperWidget>
  );
}

function DiseaseActivityDAPSA({ form }) {
  const tableData = {
    head: ["Count Group", "Score"],
    body: [
      [
        "Tender Joint Count",
        <NumberInput
          {...form.getInputProps("dapsa.tenderJointCount")}
          rightSection={<Null />}
        />,
      ],
      [
        "Swollen Joint Count",
        <NumberInput
          {...form.getInputProps("dapsa.swollenJointCount")}
          rightSection={<Null />}
        />,
      ],
      [
        "Patient Pain Visual Analog Scale",
        <NumberInput
          {...form.getInputProps("dapsa.patientPain")}
          rightSection={<Null />}
        />,
      ],
      [
        "Patient Global Disease Activity VAS",
        <NumberInput
          {...form.getInputProps("dapsa.globalPatient")}
          rightSection={<Null />}
        />,
      ],
      [
        "Evaluator Global Disease Activity VAS",
        <NumberInput
          {...form.getInputProps("dapsa.globalEvaluator")}
          rightSection={<Null />}
        />,
      ],
    ],
  };

  return (
    <FormWrapperWidget title="Disease Activity: DAPSA">
      <Paper shadow="lg" p="lg" radius="lg" withBorder>
        <Table data={tableData} styles={{ th: { width: "70%" } }} />
      </Paper>
    </FormWrapperWidget>
  );
}

export default function HCPNewPatientWidget({ isMobile = false }) {
  const form = useForm({
    initialValues: {
      study: null,
      country: null,
      disease: null,
      visitedAt: new Date(),
      prescribedAt: null,
      id: "1111",
      email: "",
      nationality: "",
      language: "",
      dob: null,
      age: "",
      weight: "",
      weightUnit: "kg",
      height: "",
      heightUnit: "cm",
      bmi: "",
      bmiCategory: "",
      sex: "",
      primaryEmployment: "",
      educationStatus: "",
      smokingStatus: "",
      diagnosisDate: null,
      diseaseEvolution: "",
      csDMARDUsed: [],
      btsDMARDUsed: [
        { treatment: [], start: null, end: null, key: randomId() },
      ],
      csDMARDBaseline: [],
      corticosteroidBaseline: [],
      btsDMARDBaseline: [
        { treatment: [], start: null, end: null, key: randomId() },
      ],
      cdai: {
        tenderJointCount: 0,
        swollenJointCount: 0,
        globalPatient: 0,
        globalHCP: 0,
      },
      dapsa: {
        tenderJointCount: 0,
        swollenJointCount: 0,
        patientPain: 0,
        globalPatient: 0,
        globalEvaluator: 0,
      },
      exercise: {
        walking: "",
        stretching: "",
        flowingMovements: "",
        workingOutInWater: "",
        cycling: "",
        strengthTraining: "",
        handExercise: "",
        dietaryIntake: "",
      },
      sleepTrouble: "",
      nightWakeUp: "",
      troubleStayingSleep: "",
      feelingTired: "",
    },
  });

  return (
    <MultiStepFormModalWidget
      btnTitle="Add New Patient"
      btnVariant="outline"
      modalTitle="Create a new Patient"
      steps={[
        <StudyData {...{ form }} />,
        <DemographicDataOne {...{ form }} />,
        <DemographicDataTwo {...{ form }} />,
        <MedicationHistory {...{ form }} />,
        <BaselineMedication {...{ form }} />,
        <DiseaseActivityCDAI {...{ form }} />,
        <DiseaseActivityDAPSA {...{ form }} />,
        <WellnessData {...{ form }} />,
        <SleepDisturbance {...{ form }} />,
      ]}
      {...{ isMobile, form }}
    />
  );
}
