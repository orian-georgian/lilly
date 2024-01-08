import { List, Flex, Text, Badge } from "@mantine/core";
import { FunctionComponent } from "react";

interface ListItemProps {
  color: string;
  label: string;
  value: string | number | undefined;
}

const ListItem: FunctionComponent<ListItemProps> = ({
  label,
  value,
  color,
}) => {
  return (
    <List.Item>
      <Flex className="w-100" align="center" justify="space-between">
        <Text>{label}</Text>
        <Badge miw={60} variant="outline" color={color} radius="md">
          {value}
        </Badge>
      </Flex>
    </List.Item>
  );
};

export default ListItem;
