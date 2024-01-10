import {
  Button,
  Flex,
  Title,
  ActionIcon,
  NavLink,
  Grid,
  Text,
  TextInput,
  Select,
  NumberInput,
  Divider,
  MultiSelect,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { useRouter } from "next/router";
import { FunctionComponent, ReactNode, useEffect, useRef } from "react";
import { IconType } from "react-icons";
import {
  MdArrowBack,
  MdInfoOutline,
  MdOutlineCalendarMonth,
  MdOutlineFolderShared,
  MdOutlineLocationOn,
  MdOutlineMuseum,
  MdOutlineSupervisorAccount,
} from "react-icons/md";
import {
  Corticosteroids,
  Countries,
  DietaryIntakes,
  DiseaseActivities,
  Diseases,
  EducationStatuses,
  Exercises,
  Genders,
  SleepDisturbances,
  SmokingStatuses,
  Treatments,
  Units,
  YesNo,
} from "@lilly/constants";
import { DatePickerInput } from "@mantine/dates";
import { calculateBMI } from "@lilly/utils";
import { Exercise } from "@lilly/types";
import { DrawerForm } from "../DrawerForm";
import { MultiStepsForm } from "../MultiStepsForm";

interface SectionTitle {
  title: string;
  icon: IconType;
}

interface SectionItem {
  children: ReactNode;
}

const navList = [
  {
    label: "Patient Data",
    //path: "/edit-patient",
    path: "/",
    width: 87,
  },
  {
    label: "Questionnaires Results",
    path: "/edit-patient/questionnaires",
    width: 165,
  },
];

const SectionTitle = ({ title, icon: Icon }: SectionTitle) => (
  <Grid.Col span={12}>
    <Flex gap="xs" align="center">
      <Icon size={24} />
      <Text fw={500} lh={2.4}>
        {title}
      </Text>
    </Flex>
  </Grid.Col>
);

const SectionItem = ({ children }: SectionItem) => (
  <Grid.Col span={{ base: 12, sm: 6, md: 4, lg: 3 }}>{children}</Grid.Col>
);

const classNames = {
  label: "input-label-normal",
};

export const Null = () => null;

const formValues = {
  email: "mail@address.be",
  nationality: "CAN",
  language: "CAN",
  dob: new Date("1995-06-21T12:30:00"),
  weight: 80,
  weightUnit: "kg",
  height: 185,
  heightUnit: "cm",
  bmi: "",
  bmiCategory: "",
  sex: "2",
  primaryEmployment: "Y",
  educationStatus: "26",
  smokingStatus: "3",
  diagnosisDate: new Date("2023-11-23T12:30:00"),
  study: "Study1",
  country: "CAN",
  disease: "aXSpA",
  prescribedAt: new Date("2023-11-23T12:30:00"),
  csDMARDUsed: ["methotrexate (Rheumatrex, Trexall, other)"],
  btsDMARDUsed: ["1", "2"],
  btsDMARDBaseline: ["1", "2"],
  csDMARDBaseline: ["methotrexate (Rheumatrex, Trexall, other)"],
  corticosteroidBaseline: ["dexamethasone"],
  walking: "Y",
  stretching: "N",
  flowingMovements: "Y",
  workingOutInWater: "N",
  cycling: "Y",
  strengthTraining: "Y",
  handExercise: "N",
  dietaryIntake: "high",
  sleepTrouble: "0",
  nightWakeUp: "1",
  troubleStayingSleep: "1",
  feelingTired: "3",
};

const handleSubmit = (data: object) => {
  console.log(data);
};

const handleSubmitErrors = (errors: object) => {
  console.error(errors);
};

const Test = () => <div>Test</div>;

const EditPatientData: FunctionComponent = () => {
  const { pathname } = useRouter();

  const drawerDisEnrolPatientFormRef = useRef(null);

  const handleDisEnrolPatient = (e) => {
    e.stopPropagation();
    drawerDisEnrolPatientFormRef.current?.open();
  };

  const handleDisEnrolPatientCancel = () => {
    drawerDisEnrolPatientFormRef.current?.close();
  };

  const handleSaveDisEnrolPatient = (values) => {
    console.log(values);
    drawerDisEnrolPatientFormRef.current?.close();
  };

  const form: any = useForm({
    initialValues: formValues,
    //validate: formValidators,
  });

  const { weight, weightUnit, height, heightUnit, study } = form.values;

  useEffect(() => {
    const { bmi, bmiCategory } = calculateBMI(
      weight,
      weightUnit,
      height,
      heightUnit
    );
    form.setValues({ bmi, bmiCategory });
  }, [weight, weightUnit, height, heightUnit]);

  const disenrolPatientFormSteps = [Test];

  return (
    <Flex className="w-100" direction="column" gap="lg">
      <Flex className="w-100" direction="column" gap="lg">
        <Flex align="center" gap="sm" justify="space-between" wrap="wrap">
          <Flex align="center" gap="sm">
            <ActionIcon
              variant="transparent"
              color="var(--mantine-color-primary-dark-9)"
              w={36}
              h={36}
            >
              <MdArrowBack size={36} />
            </ActionIcon>

            <Title order={4} size="32px">
              User ID
            </Title>
          </Flex>

          <Flex align="center" gap="sm" wrap="wrap">
            <Button variant="outline" color="lilly-red">
              Cancel Authorization
            </Button>
            <Button
              variant="outline"
              color="lilly-red"
              onClick={handleDisEnrolPatient}
            >
              Disenrol
            </Button>
          </Flex>
        </Flex>
        <Flex align="center" gap="sm" className="lilly-topbar">
          {navList.map(({ label, path, width }) => {
            const active = pathname === path;

            return (
              <NavLink
                w={width}
                className={`${active ? "lilly-nav-link" : ""}`}
                key={path}
                href={path}
                label={label}
                active={active}
                styles={{
                  label: {
                    fontSize: 14,
                    fontWeight: 500,
                  },
                  root: {
                    background: "transparent",
                    padding: 0,
                    color: active
                      ? "var(--mantine-color-lilly-red-7)"
                      : "var(--mantine-color-primary-dark-9)",
                  },
                }}
              />
            );
          })}
        </Flex>
      </Flex>
      <form
        onSubmit={form.onSubmit(handleSubmit, handleSubmitErrors)}
        noValidate
      >
        <Grid
          p="lg"
          styles={{
            root: {
              border: "1px solid var(--mantine-color-primary-dark-1)",
              borderRadius: "8px",
            },
          }}
        >
          <SectionTitle title="Demographic Data" icon={MdOutlineMuseum} />
          <SectionItem>
            <TextInput
              classNames={classNames}
              label="E-Mail Address"
              placeholder="Fill in the e-mail address"
              withAsterisk
              {...form.getInputProps("email")}
            />
          </SectionItem>
          <SectionItem>
            <Select
              classNames={classNames}
              label="Nationality"
              placeholder="Select a nationality"
              data={Countries.Nationality}
              withAsterisk
              clearable
              {...form.getInputProps("nationality")}
            />
          </SectionItem>
          <SectionItem>
            <Select
              classNames={classNames}
              label="Language"
              placeholder="Select a language"
              data={Countries.Language}
              withAsterisk
              clearable
              {...form.getInputProps("language")}
            />
          </SectionItem>
          <SectionItem>
            <DatePickerInput
              classNames={classNames}
              label="Date of Birth"
              placeholder="Select a date"
              valueFormat="DD/MM/YYYY"
              withAsterisk
              clearable
              leftSection={<MdOutlineCalendarMonth height={20} width={20} />}
              leftSectionPointerEvents="none"
              maxDate={new Date()}
              {...form.getInputProps("dob")}
            />
          </SectionItem>
          <SectionItem>
            <Select
              classNames={classNames}
              clearable
              label="Gender"
              placeholder="Select a gender"
              withAsterisk
              data={Genders.List}
              {...form.getInputProps("sex")}
            />
          </SectionItem>
          <SectionItem>
            <NumberInput
              classNames={classNames}
              label="Weight"
              placeholder="weight"
              withAsterisk
              rightSection={<Null />}
              suffix={` ${
                Units.Weight.find((unit) => unit.value === weightUnit)?.label
              }`}
              {...form.getInputProps("weight")}
            />
          </SectionItem>
          <SectionItem>
            <NumberInput
              classNames={classNames}
              label="Height"
              placeholder="height"
              withAsterisk
              rightSection={<Null />}
              suffix={` ${
                Units.Height.find((unit) => unit.value === heightUnit)?.label
              }`}
              {...form.getInputProps("height")}
            />
          </SectionItem>
          <SectionItem>
            <Grid>
              <Grid.Col span={{ base: 12, md: 4, lg: 4 }}>
                <NumberInput
                  classNames={classNames}
                  label="BMI"
                  disabled
                  {...form.getInputProps("bmi")}
                  rightSection={<Null />}
                />
              </Grid.Col>
              <Grid.Col span={{ base: 12, md: 8, lg: 8 }}>
                <TextInput
                  classNames={{
                    label: "input-label-normal",
                  }}
                  label="BMI Category"
                  {...form.getInputProps("bmiCategory")}
                  disabled
                />
              </Grid.Col>
            </Grid>
          </SectionItem>
          <SectionItem>
            <Select
              classNames={classNames}
              clearable
              label="Primary Employment"
              placeholder="Are you employed at the moment"
              data={YesNo.List}
              withAsterisk
              {...form.getInputProps("primaryEmployment")}
            />
          </SectionItem>
          <SectionItem>
            <Select
              classNames={classNames}
              clearable
              label="Education Status"
              placeholder="Select an education status"
              data={EducationStatuses.List}
              withAsterisk
              {...form.getInputProps("educationStatus")}
            />
          </SectionItem>
          <SectionItem>
            <Select
              classNames={classNames}
              clearable
              label="Smoking Status"
              placeholder="Select a smoking status"
              data={SmokingStatuses.List}
              withAsterisk
              {...form.getInputProps("smokingStatus")}
            />
          </SectionItem>
          <SectionItem>
            <DatePickerInput
              classNames={classNames}
              label="Disease Diagnosis Date"
              placeholder="Select a date"
              valueFormat="DD/MM/YYYY"
              clearable
              withAsterisk
              leftSection={<MdOutlineCalendarMonth height={20} width={20} />}
              leftSectionPointerEvents="none"
              maxDate={new Date()}
              {...form.getInputProps("diagnosisDate")}
            />
          </SectionItem>
          <Divider w="100%" my="lg" />
          <SectionTitle title="Study Data" icon={MdOutlineLocationOn} />
          <SectionItem>
            <Select
              classNames={classNames}
              label="Study"
              placeholder="Select a study"
              data={["Study1", "Study2", "Study3", "Study4"]}
              clearable
              withAsterisk
              {...form.getInputProps("study")}
            />
          </SectionItem>
          <SectionItem>
            <Select
              classNames={classNames}
              label="Disease"
              placeholder={study ? "Disease" : "Select a study first"}
              data={Diseases.List}
              disabled={!study}
              clearable
              withAsterisk
              {...form.getInputProps("disease")}
            />
          </SectionItem>
          <SectionItem>
            <DatePickerInput
              classNames={classNames}
              label="Treatment Prescribes Date"
              placeholder="Select a date"
              valueFormat="DD/MM/YYYY"
              clearable
              withAsterisk
              maxDate={new Date()}
              leftSection={<MdOutlineCalendarMonth height={20} width={20} />}
              leftSectionPointerEvents="none"
              {...form.getInputProps("prescribedAt")}
            />
          </SectionItem>
          <SectionItem>
            <Select
              classNames={classNames}
              label="Country/Region/Site"
              placeholder={
                study ? "Country/Region/Site" : "Select a study first"
              }
              data={Countries.Nationality}
              disabled={!study}
              clearable
              withAsterisk
              {...form.getInputProps("country")}
            />
          </SectionItem>
          <Divider w="100%" my="lg" />
          <SectionTitle title="Medication History" icon={MdInfoOutline} />
          <SectionItem>
            <MultiSelect
              classNames={{
                label: "input-label-normal",
              }}
              clearable
              withAsterisk
              label="b/tsDMARD previously used"
              placeholder="Select a treatment"
              data={Treatments.List}
              {...form.getInputProps(`btsDMARDUsed`)}
            />
          </SectionItem>
          <SectionItem>
            <MultiSelect
              classNames={classNames}
              clearable
              withAsterisk
              label="csDMARD previously used"
              placeholder="Select previously used medication"
              data={[
                "methotrexate (Rheumatrex, Trexall, other)",
                "leflunomide",
                "sulfasalazine",
                "cyclosporin A – (oral)",
                "chloroquine",
                "hydroxychloroquine",
                "sodium aurothiomalate: myocrisin",
              ]}
              {...form.getInputProps("csDMARDUsed")}
            />
          </SectionItem>
          <Divider w="100%" my="lg" />
          <SectionTitle
            title="Baseline Medication"
            icon={MdOutlineFolderShared}
          />
          <SectionItem>
            <MultiSelect
              classNames={classNames}
              clearable
              withAsterisk
              label="b/tsDMARD at Baseline"
              placeholder="Select a treatment"
              data={Treatments.List}
              {...form.getInputProps("btsDMARDBaseline")}
            />
          </SectionItem>
          <SectionItem>
            <MultiSelect
              classNames={classNames}
              clearable
              withAsterisk
              label="csDMARD at baseline"
              placeholder="Select csDMARD at baseline"
              data={[
                "methotrexate (Rheumatrex, Trexall, other)",
                "leflunomide",
                "sulfasalazine",
                "cyclosporin A – (oral)",
                "chloroquine",
                "hydroxychloroquine",
                "sodium aurothiomalate: myocrisin",
              ]}
              {...form.getInputProps("csDMARDBaseline")}
            />
          </SectionItem>
          <SectionItem>
            <MultiSelect
              classNames={classNames}
              clearable
              withAsterisk
              label="Costicosteroid at baseline"
              placeholder="Select Costicosteroid at baseline"
              data={Corticosteroids.List}
              {...form.getInputProps("corticosteroidBaseline")}
            />
          </SectionItem>
          <Divider w="100%" my="lg" />
          <SectionTitle
            title="Wellness Data"
            icon={MdOutlineSupervisorAccount}
          />
          {Exercises.List.map(({ value, label, description }: Exercise) => (
            <SectionItem>
              <Select
                classNames={classNames}
                clearable
                label={label}
                data={YesNo.List}
                {...form.getInputProps(value)}
              />
            </SectionItem>
          ))}
          <SectionItem>
            <Select
              clearable
              classNames={classNames}
              label="Dietary"
              placeholder="Select dietary intake"
              data={DietaryIntakes.List}
              {...form.getInputProps(`dietaryIntake`)}
            />
          </SectionItem>
          <SectionItem>
            <Select
              classNames={classNames}
              withAsterisk
              clearable
              label="Have trouble falling asleep?"
              placeholder="Select sleep disturbance"
              data={SleepDisturbances.List}
              {...form.getInputProps("sleepTrouble")}
            />
          </SectionItem>
          <SectionItem>
            <Select
              classNames={classNames}
              withAsterisk
              clearable
              label="Wake up several times per night?"
              placeholder="Select sleep disturbance"
              data={SleepDisturbances.List}
              {...form.getInputProps("nightWakeUp")}
            />
          </SectionItem>
          <SectionItem>
            <Select
              classNames={classNames}
              withAsterisk
              clearable
              label="Have trouble staying asleep (including waking far away too early)?"
              placeholder="Select sleep disturbance"
              data={SleepDisturbances.List}
              {...form.getInputProps("troubleStayingSleep")}
            />
          </SectionItem>
          <SectionItem>
            <Select
              classNames={classNames}
              withAsterisk
              clearable
              label="Wake up after your usual amount of sleep feeling tired and worn out?"
              placeholder="Select sleep disturbance"
              data={SleepDisturbances.List}
              {...form.getInputProps("feelingTired")}
            />
          </SectionItem>
        </Grid>
      </form>
      <DrawerForm ref={drawerDisEnrolPatientFormRef} title="Disenrol Patient">
        <MultiStepsForm
          totalSteps={disenrolPatientFormSteps.length}
          startFrom={1}
          submitText="Confirm"
          formValues={{}}
          formValidators={{}}
          steps={disenrolPatientFormSteps}
          onCancel={handleDisEnrolPatientCancel}
          onSubmit={handleSaveDisEnrolPatient}
        />
      </DrawerForm>
    </Flex>
  );
};

export default EditPatientData;
