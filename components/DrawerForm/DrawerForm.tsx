import { Drawer, Flex } from "@mantine/core";
import {
  ForwardRefRenderFunction,
  forwardRef,
  useImperativeHandle,
} from "react";
import { useDisclosure } from "@mantine/hooks";

import { DrawerFormProps, DrawerFormRef } from "@lilly/types";

const DrawerForm: ForwardRefRenderFunction<DrawerFormRef, DrawerFormProps> = (
  { title, children, position = "right" },
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
    >
      <Flex className="w-100" justify="center">
        {children}
      </Flex>
    </Drawer>
  );
};

export default forwardRef(DrawerForm);
