import { useState, useEffect, ChangeEvent } from "react";
import { Study } from "@lilly/types";

const studiesList: Study[] = [
  {
    code: "Study1",
    title: "Study Name Two Lines",
    disease: "exSpA",
    medicalLead: "John Doe",
    numberOfLocations: 3,
    startDate: "30/12/23",
    endDate: "30/12/24",
    totalPatients: 25,
    papers: 3,
    hpcQuestionnaires: 2,
    patientQuestionnaires: 5,
  },
  {
    code: "Study2",
    title: "Study Name 2",
    disease: "RA",
    medicalLead: "Jane Deer",
    numberOfLocations: 3,
    startDate: "30/12/23",
    endDate: "30/12/24",
    totalPatients: 25,
    papers: 3,
    hpcQuestionnaires: 2,
    patientQuestionnaires: 5,
  },
  {
    code: "Study3",
    title: "Study Name 3",
    disease: "PsA",
    medicalLead: "Bart Smith",
    numberOfLocations: 3,
    startDate: "30/12/23",
    endDate: "30/12/24",
    totalPatients: 25,
    papers: 3,
    hpcQuestionnaires: 2,
    patientQuestionnaires: 5,
  },
];

const useStudies = () => {
  const [studies, setStudies] = useState<Study[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const loadStudies = async (): Promise<Study[]> => {
    return new Promise<Study[]>((resolve) => {
      setTimeout(() => {
        resolve(studiesList);
      }, 1000);
    });
  };

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
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
    isLoading,
  };
};

export default useStudies;
