import { Flex } from "@mantine/core";
import {
  PatientDashboard,
  HCPDashboard,
  PatientProfile,
  CoreTeamDashboard,
} from "@lilly/components";

export default function Home() {
  return (
    <Flex>
      {/* <PatientDashboard /> */}
      <HCPDashboard />
      {/* <PatientProfile /> */}
      {/* <CoreTeamDashboard /> */}
      {/* <HCPDashboard /> */}
    </Flex>
  );
}
