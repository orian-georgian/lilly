import { Flex, Grid, Text, Button, Modal, Divider } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import {
  MdOutlineMuseum,
  MdOutlineLocationOn,
  MdOutlineInfo,
  MdOutlineFolderShared,
  MdOutlineSupervisorAccount,
} from "react-icons/md";
import PatientProfileData from "@lilly/constants/patient-profile-data";

const patientProfileData = {
  demographicData: {
    Icon: MdOutlineMuseum,
    data: {
      email: "test@test.com",
      nationality: "Indian",
      language: "Hindi",
      dateOfBirth: "21/06/1995",
      gender: "Male",
      weight: "75 kg",
      height: "185 cm",
      bmi: "26.7",
      primaryEmployment: "Yes",
      educationStatus: "University Education",
      smokingStatus: "Former Smoker",
      diagnosisDate: "27/12/2023",
    },
  },
  studyData: {
    Icon: MdOutlineLocationOn,
    data: {
      study: "Study Name",
      disease: "axSpa",
      treatmentPrescribesDate: "27/12/2023",
      country: "United Kingdom",
    },
  },
  medicationHistory: {
    Icon: MdOutlineInfo,
    data: {
      btsDMARDUsed: "Apremilast (Otezia)",
      csDMARDUsed: "methotrexate (Rheumatrex, Trexall, other)",
    },
  },
  baselineMedication: {
    Icon: MdOutlineFolderShared,
    data: {
      btsDMARDBaseline: "Ixekizumab (PsA, axSpA)",
      csDMARDBaseline: "answer",
      corticosteroidBaseline: "Corticosteroid at baseline",
    },
  },
  wellnessData: {
    Icon: MdOutlineSupervisorAccount,
    data: {
      walking: "Yes",
      stretching: "No",
      flowingMovements: "No",
      workingOutInWater: "Yes",
      cycling: "No",
      strengthTraining: "Yes",
      handExercise: "Yes",
      dietary: "High Intake",
      sleepTrouble: "No",
      nightWakeUp: "Several times per week",
      troubleStayingSleep: "Several times per week",
      feelingTired: "Several times per week",
    },
  },
};

export default function PatientProfile() {
  const [opened, { close, open }] = useDisclosure();

  const dataEntries = Object.entries(patientProfileData);

  return (
    <Grid className="lilly-patientProfile w-100" gutter={20}>
      <Grid.Col span={{ base: 12, md: 12, lg: 12 }}>
        <Flex
          direction="row"
          justify="space-between"
          align="center"
          wrap="wrap"
          gap={10}
        >
          <Text fw={700} fz={32}>
            User ID
          </Text>
          <Flex direction="row" gap={10} align="center" wrap="wrap">
            <Button variant="outline">Change Password</Button>
            <Button variant="filled" onClick={open}>
              Request to Cancel Authorization
            </Button>
            <Modal
              opened={opened}
              onClose={close}
              centered
              title="Request to Cancel Authorization"
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
              <Flex direction="column" gap={10}>
                <div className="modal-divider" />
                <Text>
                  Are you sure you want to cancel your authorization to use your
                  data in this study? This will also mean your profile becomes
                  inactive.
                </Text>
                <div className="modal-divider" />
                <Flex direction="row" gap={10} justify="space-between">
                  <Button variant="outline" onClick={close}>
                    Cancel
                  </Button>
                  <Button variant="filled">Confirm</Button>
                </Flex>
              </Flex>
            </Modal>
          </Flex>
        </Flex>
      </Grid.Col>
      <Grid.Col span={{ base: 12, md: 12, lg: 12 }}>
        <Grid gutter={27} className="lilly-patientProfile__content-section">
          {dataEntries.map(([key, { Icon, data }], index) => (
            <>
              <Grid.Col span={{ base: 12, md: 12, lg: 12 }}>
                <Flex direction="row" gap={5}>
                  <Icon size={24} />
                  <Text fw={500} fz={16}>
                    {
                      PatientProfileData.List.find(
                        (pData) => pData.value === key
                      )?.label
                    }
                  </Text>
                </Flex>
              </Grid.Col>
              {Object.entries(data).map(([key, value]) => (
                <Grid.Col span={{ base: 4, md: 4, lg: 3 }}>
                  <Text className="lilly-patientProfile__data-label">
                    {
                      PatientProfileData.List.find(
                        (pData) => pData.value === key
                      )?.label
                    }
                  </Text>
                  <Text className="lilly-patientProfile__data-value">
                    {value}
                  </Text>
                </Grid.Col>
              ))}
              {index !== dataEntries?.length - 1 && (
                <Grid.Col span={{ base: 12, md: 12, lg: 12 }}>
                  <div className="lilly-patientProfile__data-divider" />
                </Grid.Col>
              )}
            </>
          ))}
        </Grid>
      </Grid.Col>
    </Grid>
  );
}
