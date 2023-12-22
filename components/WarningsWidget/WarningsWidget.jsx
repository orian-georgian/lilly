import { Alert, Text, Flex } from "@mantine/core";
import { MdOutlineInfo } from "react-icons/md";

export default function WarningsWidget({
  messages = [],
  color = "lilly-red",
  variant = "outline",
}) {
  return (
    <Alert
      variant={variant}
      color={color}
      radius="lg"
      fs={12}
      icon={<MdOutlineInfo size={20} />}
    >
      <Flex direction="column" gap="xs">
        {messages.map((message) => (
          <Text key={message} styles={{ root: { fontSize: 12 } }}>
            {message}
          </Text>
        ))}
      </Flex>
    </Alert>
  );
}
