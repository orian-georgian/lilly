import { Flex, Title, Button, Divider, Grid, Text } from "@mantine/core";
import {
  MdOutlineMuseum,
  MdOutlineLocationOn,
  MdInfoOutline,
  MdOutlineFolderShared,
  MdOutlineSupervisorAccount,
} from "react-icons/md";
import { DrawerForm } from "../DrawerForm";
import React, { useRef } from "react";
import { DrawerFormRef } from "@lilly/types";
import { IconType } from "react-icons";

interface SectionTitleType {
  title: string;
  icon: IconType;
}

interface SectionItemType {
  label: string;
  value: string;
}

const SectionTitle = ({ title, icon: Icon }: SectionTitleType) => (
  <Grid.Col span={12}>
    <Flex gap="xs" align="center">
      <Icon size={24} />
      <Text fw={500} lh={2.4}>
        {title}
      </Text>
    </Flex>
  </Grid.Col>
);

const SectionItem = ({ label, value }: SectionItemType) => (
  <Grid.Col span={{ base: 12, sm: 6, md: 4, lg: 3 }}>
    <Flex direction="column">
      <Text c="dimmed" size="xs">
        {label}
      </Text>
      <Text size="sm" fw={500} lh={2.4}>
        {value}
      </Text>
    </Flex>
  </Grid.Col>
);

export default function PatientProfile() {
  const drawerRef = useRef<DrawerFormRef>(null);

  const handleDrawer = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.stopPropagation();
    drawerRef.current?.open();
  };

  const handleDrawerCancel = (): void => {
    drawerRef.current?.close();
  };

  return (
    <Flex className="w-100" direction="column" gap="lg">
      <Flex
        className="w-100"
        align="center"
        gap="sm"
        justify="space-between"
        wrap="wrap"
      >
        <Title order={4} size="32px">
          User ID
        </Title>
        <Flex align="center" gap="sm" wrap="wrap">
          <Button variant="outline" color="lilly-red">
            Change Password
          </Button>
          <Button variant="filled" color="lilly-red" onClick={handleDrawer}>
            Request to Cancel Authorization
          </Button>
        </Flex>
      </Flex>
      <Grid
        p="lg"
        styles={{
          root: {
            border: "0.8px solid var(--mantine-color-primary-dark-1)",
            borderRadius: "8px",
          },
        }}
      >
        <SectionTitle title="Demographic Data" icon={MdOutlineMuseum} />

        <SectionItem label="E-Mail Address" value="mail@address.be" />
        <SectionItem label="Nationality" value="American" />
        <SectionItem label="Language" value="English" />
        <SectionItem label="Date of Birth" value="01/01/1990" />

        <SectionItem label="Gender" value="Male" />
        <SectionItem label="Weigth" value="80 kg" />
        <SectionItem label="Height" value="185 cm" />
        <SectionItem label="BMI" value="26.7" />

        <SectionItem label="Primary Employment" value="Yes" />
        <SectionItem label="Education Status" value="University Education" />
        <SectionItem label="Smoking Status" value="Former Smoker" />
        <SectionItem label="Disease Diagnosis Date" value="23/11/2023" />

        <Divider w="100%" my="lg" />

        <SectionTitle title="Study Data" icon={MdOutlineLocationOn} />

        <SectionItem label="Study" value="Study Name" />
        <SectionItem label="Disease" value="axSpA" />
        <SectionItem label="Treatment Prescribes Date" value="23/11/2023" />
        <SectionItem label="Country/Region/Site" value="United Kingdom" />

        <Divider w="100%" my="lg" />

        <SectionTitle title="Medication History" icon={MdInfoOutline} />

        <SectionItem
          label="b/tsDMARD previously used"
          value="Apremilast (Otezia)"
        />
        <SectionItem
          label="csDMARD previously used"
          value="methotrexate (Rheumatrex, Trexall, other)"
        />

        <Divider w="100%" my="lg" />

        <SectionTitle
          title="Baseline Medication"
          icon={MdOutlineFolderShared}
        />

        <SectionItem
          label="b/tsDMARD at baseline"
          value="Ixekizumab (PsA, axSpA)"
        />
        <SectionItem label="csDMARD at baseline" value="answer" />
        <SectionItem label="Corticosteroid at baseline" value="Dexamethasone" />

        <Divider w="100%" my="lg" />

        <SectionTitle title="Wellness Data" icon={MdOutlineSupervisorAccount} />

        <SectionItem label="Walking" value="Yes" />
        <SectionItem label="Stretching" value="No" />
        <SectionItem label="Flowing Movements" value="No" />
        <SectionItem label="Working out in water" value="Yes" />

        <SectionItem label="Cycling" value="No" />
        <SectionItem label="Strength Training" value="Yes" />
        <SectionItem label="Hand Exercises" value="Yes" />
        <SectionItem label="Dietary" value="High Intake" />

        <SectionItem label="Have trouble falling asleep?" value="No" />
        <SectionItem
          label="Wake up several times per night?"
          value="Several times per week"
        />
        <SectionItem
          label="Have trouble staying asleep (including waking far away too early)?"
          value="Several times per week"
        />
        <SectionItem
          label="Wake up after your usual amount of sleep feeling tired and worn out?"
          value="Several times per week"
        />
      </Grid>
      <DrawerForm ref={drawerRef} title="Request to Cancel Authorization">
        <Flex direction="column" gap={10} px="xl" className="w-100">
          <Divider w="100%" />
          <Text>
            Are you sure you want to cancel your authorization to use your data
            in this study? This will also mean your profile becomes inactive.
          </Text>
          <Divider w="100%" my="sm" />
          <Flex align="center" justify="space-between">
            <Button variant="outline" onClick={handleDrawerCancel}>
              Cancel
            </Button>
            <Button
              variant="filled"
              onClick={() => console.log("request to cancel")}
            >
              Confirm
            </Button>
          </Flex>
        </Flex>
      </DrawerForm>
    </Flex>
  );
}
