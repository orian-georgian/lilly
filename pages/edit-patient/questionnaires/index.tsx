import { EditPatientHeader } from "@lilly/components/EditPatientHeader";
import { QuestionnaireStatisticsWidget } from "@lilly/components/QuestionnaireStatisticsWidget";
import { Flex } from "@mantine/core";

function Questionnaires() {
  return (
    <Flex className="w-100" direction="column" gap="lg">
      <EditPatientHeader />
      <QuestionnaireStatisticsWidget />
    </Flex>
  );
}

export default Questionnaires;
