import { Button, Flex, Title, UnstyledButton } from "@mantine/core";
import { useRouter } from "next/router";
import Link from "next/link";
import React, { FunctionComponent, useRef } from "react";
import { MdArrowBack } from "react-icons/md";
import { DrawerForm } from "../DrawerForm";
import { DrawerFormRef } from "@lilly/types";
import { PatientDisEnrolForm } from "../PatientDisEnrolForm";
import { PatientCancelAuthorizationForm } from "../PatientCancelAuthorizationForm";

const navList = [
  {
    label: "Patient Data",
    path: "/edit-patient",
    width: 87,
  },
  {
    label: "Questionnaires Results",
    path: "/edit-patient/questionnaires",
    width: 165,
  },
];

const EditPatientHeader: FunctionComponent = () => {
  const { pathname, back } = useRouter();

  const drawerDisEnrolFormRef = useRef<DrawerFormRef>(null);

  const drawerCancelAuthFormRef = useRef<DrawerFormRef>(null);

  const handleDisEnrolPatient = (
    e: React.MouseEvent<HTMLButtonElement>
  ): void => {
    e.stopPropagation();
    drawerDisEnrolFormRef.current?.open();
  };

  const handleDisEnrolPatientCancel = (): void => {
    drawerDisEnrolFormRef.current?.close();
  };

  const handleCancelAuth = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.stopPropagation();
    drawerCancelAuthFormRef.current?.open();
  };

  const handleCancelAuthClose = (): void => {
    drawerCancelAuthFormRef.current?.close();
  };

  return (
    <Flex className="w-100" direction="column" gap="lg">
      <Flex align="center" gap="sm" justify="space-between" wrap="wrap">
        <Flex align="center" gap="sm">
          <UnstyledButton onClick={back}>
            <MdArrowBack size={36} />
          </UnstyledButton>
          <Title order={4} size="32px">
            User ID
          </Title>
        </Flex>
        <Flex align="center" gap="sm" wrap="wrap">
          <Button
            variant="outline"
            color="lilly-red"
            onClick={handleCancelAuth}
          >
            Cancel Authorization
          </Button>
          <Button
            variant="outline"
            color="lilly-red"
            onClick={handleDisEnrolPatient}
          >
            Disenrol
          </Button>
        </Flex>
      </Flex>
      <Flex align="center" gap="sm" className="lilly-topbar">
        {navList.map(({ label, path, width }) => {
          const active = pathname === path;

          const classes = ["lilly-nav-link"];
          if (active) {
            classes.push("lilly-nav-link-active");
          } else {
            classes.push("lilly-nav-link-inactive");
          }

          return (
            <Link key={path} href={path} className={classes.join(" ")}>
              {label}
            </Link>
          );
        })}
      </Flex>
      <DrawerForm ref={drawerDisEnrolFormRef} title="Disenrol Patient">
        <PatientDisEnrolForm onClose={handleDisEnrolPatientCancel} />
      </DrawerForm>
      <DrawerForm ref={drawerCancelAuthFormRef} title="Cancel Authorization">
        <PatientCancelAuthorizationForm onClose={handleCancelAuthClose} />
      </DrawerForm>
    </Flex>
  );
};

export default EditPatientHeader;
