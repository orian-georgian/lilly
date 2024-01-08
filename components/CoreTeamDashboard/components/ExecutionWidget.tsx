import {
  WidgetContainer,
  ListItem,
} from "@lilly/components/CoreTeamDashboard/components";
import { List } from "@mantine/core";
import { getColorByPercentage } from "@lilly/utils";

const protocols = [
  {
    id: 1,
    label: "Site Activation",
    value: 100,
  },
  {
    id: 2,
    label: "Enrolment",
    value: 10,
  },
  {
    id: 3,
    label: "Data Collection",
    value: 100,
  },
  {
    id: 4,
    label: "Monitoring",
    value: 50,
  },
  {
    id: 5,
    label: "Database Lock",
    value: 100,
  },
];

export default function ExecutionWidget() {
  return (
    <WidgetContainer title="Execution" hasAction={false}>
      <List listStyleType="none" spacing="lg">
        {protocols.map(({ id, value, label }) => (
          <ListItem
            key={id}
            label={label}
            value={`${value}%`}
            color={getColorByPercentage(value)}
          />
        ))}
      </List>
    </WidgetContainer>
  );
}
