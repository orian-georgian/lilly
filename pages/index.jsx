import { Flex } from "@mantine/core";
import {
  PatientDashboard,
  HCPDashboard,
  PatientProfile,
} from "@lilly/components";

export default function Home() {
  return (
    <Flex>
      {/* <PatientDashboard /> */}
      <HCPDashboard />
      {/* <PatientProfile /> */}
    </Flex>
  );
}
