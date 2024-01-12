import { Drawer, Flex, LoadingOverlay } from "@mantine/core";
import {
  ForwardRefRenderFunction,
  forwardRef,
  useImperativeHandle,
} from "react";
import { useDisclosure } from "@mantine/hooks";

import { DrawerFormProps, DrawerFormRef } from "@lilly/types";

const DrawerForm: ForwardRefRenderFunction<DrawerFormRef, DrawerFormProps> = (
  { title, children, loading, position = "right" },
  ref
) => {
  const [opened, { open, close }] = useDisclosure(false);

  useImperativeHandle(ref, () => ({
    open,
    close,
  }));

  return (
    <Drawer
      size="lg"
      opened={opened}
      title={title}
      onClose={close}
      position={position}
      pos="relative"
    >
      <LoadingOverlay
        visible={loading}
        overlayProps={{ radius: "sm", blur: 1 }}
        loaderProps={{ color: "lilly-red" }}
      />
      <Flex className="w-100" justify="center">
        {children}
      </Flex>
    </Drawer>
  );
};

export default forwardRef(DrawerForm);
