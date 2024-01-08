import {
  WidgetContainer,
  ListItem,
} from "@lilly/components/CoreTeamDashboard/components";
import { List } from "@mantine/core";
import { getColorByPercentage } from "@lilly/utils";

const protocols = [
  {
    id: 1,
    label: "Kick-Off",
    value: 100,
  },
  {
    id: 2,
    label: "Protocol",
    value: 10,
  },
  {
    id: 3,
    label: "E-CRF",
    value: 100,
  },
  {
    id: 4,
    label: "SAP",
    value: 50,
  },
  {
    id: 5,
    label: "EC Submission",
    value: 100,
  },
];

export default function StudyProtocolWidget() {
  return (
    <WidgetContainer title="Study Protocol Implementation" hasAction={false}>
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
