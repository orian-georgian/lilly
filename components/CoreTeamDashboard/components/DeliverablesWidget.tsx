import {
  WidgetContainer,
  ListItem,
} from "@lilly/components/CoreTeamDashboard/components";
import { List } from "@mantine/core";
import { getColorByDeliverables } from "@lilly/utils";

const deliverables = [
  {
    id: 1,
    label: "Abstract",
    value: 3,
  },
  {
    id: 2,
    label: "Poster",
    value: 1,
  },
  {
    id: 3,
    label: "Clinical Study Report",
    value: 0,
  },
  {
    id: 4,
    label: "Manuscript",
    value: 2,
  },
  {
    id: 5,
    label: "Plan for 2024",
    value: 4,
  },
];

export default function DeliverablesWidget() {
  const handleAddDeliverables = () => {};

  return (
    <WidgetContainer
      title="Deliverables"
      actionText="Add Deliverables"
      hasAction={true}
      onActionClick={handleAddDeliverables}
    >
      <List listStyleType="none" spacing="lg">
        {deliverables.map(({ id, value, label }) => (
          <ListItem
            key={id}
            label={label}
            value={value}
            color={getColorByDeliverables(value)}
          />
        ))}
      </List>
    </WidgetContainer>
  );
}
