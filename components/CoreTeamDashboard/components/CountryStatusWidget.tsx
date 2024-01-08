import {
  WidgetContainer,
  ListItem,
} from "@lilly/components/CoreTeamDashboard/components";
import { List } from "@mantine/core";
import { getColorByCountryStatus } from "@lilly/utils";
import { CountryStatuses } from "@lilly/constants";

const countries = [
  {
    id: 1,
    label: "United Kingdom",
    status: "enrolling",
  },
];

export default function CountryStatusWidget() {
  const handleAddCountry = () => {};

  return (
    <WidgetContainer
      title="Country Status"
      actionText="Add Country"
      hasAction={true}
      onActionClick={handleAddCountry}
    >
      <List listStyleType="none" spacing="lg">
        <List.Item></List.Item>
        {countries.map(({ id, status, label }) => (
          <ListItem
            key={id}
            label={label}
            value={
              CountryStatuses.List?.find((cStatus) => cStatus.value === status)
                ?.label
            }
            color={getColorByCountryStatus(status)}
          />
        ))}
      </List>
    </WidgetContainer>
  );
}
