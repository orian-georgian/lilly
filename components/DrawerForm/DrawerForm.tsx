import { Drawer, Flex } from "@mantine/core";
import {
  FunctionComponent,
  Ref,
  forwardRef,
  useImperativeHandle,
  ReactNode,
} from "react";
import { useDisclosure } from "@mantine/hooks";

type Position = "left" | "right" | "bottom" | "top";

interface DrawerFormProps {
  children: ReactNode;
  title: string;
  position: Position;
}

interface DrawerFormRef {
  open: () => void;
  close: () => void;
}

const DrawerForm: FunctionComponent<DrawerFormProps> = forwardRef(
  ({ title, children, position = "right" }, ref: Ref<DrawerFormRef>) => {
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
  }
);

export default DrawerForm;
