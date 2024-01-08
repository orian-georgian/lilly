import { Paper, Text, Flex, Button, LoadingOverlay } from "@mantine/core";
import { FunctionComponent, ReactNode } from "react";

interface WidgetContainerProps {
  title: string;
  children: ReactNode;
  actionText?: string;
  hasAction?: boolean;
  onActionClick?: () => void;
}

const WidgetContainer: FunctionComponent<WidgetContainerProps> = ({
  title,
  children,
  actionText,
  hasAction,
  onActionClick,
}) => {
  return (
    <Paper shadow="lg" p="lg" radius="lg" withBorder h="100%" pos="relative">
      <LoadingOverlay
        visible={false}
        zIndex={1000}
        overlayProps={{ radius: "sm", blur: 1 }}
        loaderProps={{ color: "lilly-red" }}
      />
      <Flex direction="column" gap="sm">
        <Flex align="center" justify="space-between">
          <Text c="dimmed">{title}</Text>
          {hasAction && (
            <Button
              variant="outline"
              color="lilly-red"
              size="compact-md"
              onClick={onActionClick}
            >
              {actionText}
            </Button>
          )}
        </Flex>
        {children}
      </Flex>
    </Paper>
  );
};

export default WidgetContainer;
