import { Flex } from "@mantine/core";
import { PatientDashboard, HCPDashboard } from "@lilly/components";

export default function Home() {
  return (
    <Flex>
      {/* <PatientDashboard /> */}
      <HCPDashboard />
    </Flex>
  );
}
