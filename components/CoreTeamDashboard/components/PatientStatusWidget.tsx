import {
  WidgetContainer,
  ListItem,
} from "@lilly/components/CoreTeamDashboard/components";
import { List, Badge, Flex, Text } from "@mantine/core";
import { getColorByPercentage } from "@lilly/utils";

const data = {
  enrolledPatients: 105,
  completedPatients: 50,
};

export default function PatientStatusWidget() {
  return (
    <WidgetContainer title="Patient Status" hasAction={false}>
      <List listStyleType="none" spacing="lg">
        <ListItem
          label="Patients Expected to be Enrolled"
          value={data.enrolledPatients}
          color="gray"
        />
        <ListItem
          label="Patients Completed"
          value={`${data.completedPatients}%`}
          color={getColorByPercentage(data.completedPatients)}
        />
      </List>
    </WidgetContainer>
  );
}
