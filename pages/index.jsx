import { Flex } from "@mantine/core";
import {
  PatientDashboard,
  HCPDashboard,
  CoreTeamDashboard,
} from "@lilly/components";

export default function Home() {
  return (
    <Flex>
      {/* <PatientDashboard /> */}
      <CoreTeamDashboard />
      {/* <HCPDashboard /> */}
    </Flex>
  );
}
