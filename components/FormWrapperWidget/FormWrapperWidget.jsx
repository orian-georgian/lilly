import { Text } from "@mantine/core";

export default function FormWrapperWidget({ title, children }) {
  return (
    <>
      <Text fw={500} fz={16}>
        {title}
      </Text>
      {children}
    </>
  );
}
