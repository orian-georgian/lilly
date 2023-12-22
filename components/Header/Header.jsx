import { Flex, Image, Burger, Indicator, Avatar } from "@mantine/core";

export default function Header({ opened, onToggleSidebar }) {
  const handleToggleSidebar = () => {
    if (onToggleSidebar) {
      onToggleSidebar();
    }
  };

  return (
    <Flex align="flex-end" h="100%" pl="md" pr="md" pb="xs">
      <Flex align="center" gap="lg" w="100%">
        <Image src="images/logo.png" alt="Lilly logo" w={98} />
        <Burger
          className="m-l-auto"
          opened={opened}
          onClick={handleToggleSidebar}
          hiddenFrom="sm"
          size="sm"
        />
        <Indicator
          color="green"
          position="bottom-end"
          size={10}
          offset={5}
          withBorder
        >
          <Avatar w={30} src="images/avatar.png" />
        </Indicator>
      </Flex>
    </Flex>
  );
}
