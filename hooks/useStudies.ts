import { useState, useEffect } from "react";
import { Study } from "@lilly/types";
import { RecurrencePattern } from "@lilly/constants/recurrence-patterns";
import { QuestionnaireFrequency } from "@lilly/constants/questionnaire-frequencies";
import { Diseases } from "@lilly/constants";

const studiesList: Study[] = [
  {
    id: "mantine-73fd572372",
    code: "Study1",
    title: "Study Name Two Lines",
    description: "Some description",
    disease: Diseases.Enum.RA,
    startDate: "11/01/2024",
    endDate: "11/01/2024",
    patientsTotal: "34",
    papers: "4",
    projectManager: "John Doe",
    valueLead: "Sam Smith",
    medicalLead: "John Snow",
    dataManager: "Anna Parker",
    locations: [
      {
        id: "mantine-632fe73df2",
        location: "FRA",
        region: "DEU",
        site: "CAN",
        approvalDate: "11/01/2024",
        patientsTotal: "34",
      },
    ],
    hcpQuestionnaires: [
      {
        questionnaire: "Questionnaire number 2",
        recurrencePattern: RecurrencePattern.Weekly,
        frequency: QuestionnaireFrequency.EveryFourWeeks,
        occurrencesAmount: "3",
        numberOfDays: "4",
      },
      {
        questionnaire: "Questionnaire number 4",
        recurrencePattern: RecurrencePattern.Monthly,
        frequency: QuestionnaireFrequency.EveryFourWeeks,
        occurrencesAmount: "43",
        numberOfDays: "3",
      },
    ],
    patientQuestionnaires: [
      {
        questionnaire: "Questionnaire number 2",
        recurrencePattern: RecurrencePattern.Daily,
        frequency: QuestionnaireFrequency.EveryTwoWeeks,
        occurrencesAmount: "2",
        numberOfDays: "5",
        mandatory: "Y",
      },
    ],
  },
];

const useStudies = () => {
  const [studies, setStudies] = useState<Study[]>([]);
  const [currentStudy, setCurrentStudy] = useState<Study | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const loadStudies = async (): Promise<Study[]> => {
    return new Promise<Study[]>((resolve) => {
      setTimeout(() => {
        resolve(studiesList);
      }, 1000);
    });
  };

  const addStudy = async (study: Study): Promise<{ isOk: boolean }> => {
    return new Promise((resolve, reject) => {
      try {
        setIsLoading(true);
        setTimeout(() => {
          setStudies((prevState) => [...prevState, study]);
          setIsLoading(false);
          resolve({ isOk: true });
        }, 1000);
      } catch {
        console.error("Oups! Something went wrong!");
        reject({ isOk: false });
      }
    });
  };

  const editStudy = async (study: Study): Promise<{ isOk: boolean }> => {
    return new Promise((resolve, reject) => {
      try {
        setIsLoading(true);
        setTimeout(() => {
          setStudies((prevState) =>
            prevState.map((item) => (item.id === study.id ? study : item))
          );
          setIsLoading(false);
          resolve({ isOk: true });
        }, 1000);
      } catch {
        console.error("Oups! Something went wrong!");
        reject({ isOk: false });
      }
    });
  };

  const removeStudy = async (studyId: string): Promise<{ isOk: boolean }> => {
    return new Promise((resolve, reject) => {
      try {
        setIsLoading(true);
        setTimeout(() => {
          setStudies((prevState) =>
            prevState.filter(({ id }) => id !== studyId)
          );
          setIsLoading(false);
          resolve({ isOk: true });
        }, 1000);
      } catch {
        console.error("Oups! Something went wrong!");
        reject({ isOk: false });
      }
    });
  };

  useEffect(() => {
    (async () => {
      try {
        const studies = await loadStudies();
        setStudies(studies);
      } catch {
        console.error("Oups! Something went wrong!");
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  return {
    studies,
    currentStudy,
    isLoading,
    addStudy,
    editStudy,
    removeStudy,
    setCurrentStudy,
  };
};

export default useStudies;
