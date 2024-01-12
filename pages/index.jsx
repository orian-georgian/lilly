import { Flex, Text } from "@mantine/core";
import {
  PatientDashboard,
  HCPDashboard,
  PatientProfile,
  CoreTeamDashboard,
  EditPatientData,
} from "@lilly/components";
import { useAuth } from "react-oidc-context";
import { UserTypesEnum } from "@lilly/constants/user-types";

export default function Home() {
  const { user } = useAuth();

  if (!user) return null;

  let Dashboard = () => <Text>Invalid User Type</Text>;

  switch (user?.profile?.userType) {
    case UserTypesEnum.HCP:
      Dashboard = HCPDashboard;
      break;
    case UserTypesEnum.Patient:
      Dashboard = PatientDashboard;
      break;
    case UserTypesEnum.LillyCore:
      Dashboard = CoreTeamDashboard;
      break;
    default:
      break;
  }

  return (
    <Flex>
      <Dashboard />
    </Flex>
  );
}
