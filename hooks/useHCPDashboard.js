import { useState, useEffect } from "react";

const studiesList = [
  {
    id: 1,
    studyId: "133453",
    title: "Study nr 434343",
    patients: "6/25",
    daysLeft: 100,
    fpet: "30/12/2024",
    fpv: "21/12/2024",
    lpet: "05/09/2024",
    lpv: "06/11/2024",
  },
  {
    id: 2,
    studyId: "23423",
    title: "Study nr 53453",
    patients: "19/25",
    daysLeft: 20,
    fpet: "23/02/2024",
    fpv: "01/02/2024",
    lpet: "19/03/2024",
    lpv: "22/01/2024",
  },
];

const patientsList = [
  {
    studyId: "133453",
    patientId: "23434",
    age: 22,
    timeSinceDiagnosis: 5,
    nrOfPrevDmards: 32,
    cdaiAtBaseline: 21,
    dapsaAtBaseline: 19,
    meanChangesCdai: 33,
    meanChangesDapsa: 3,
    dataStatus: "missing-data",
    status: "inactive",
  },
  {
    studyId: "133453",
    patientId: "56533",
    age: 41,
    timeSinceDiagnosis: 3,
    nrOfPrevDmards: 25,
    cdaiAtBaseline: 25,
    dapsaAtBaseline: 29,
    meanChangesCdai: 3,
    meanChangesDapsa: 13,
    dataStatus: "delay-in-data",
    status: "inactive",
  },
  {
    studyId: "133453",
    patientId: "13122",
    age: 62,
    timeSinceDiagnosis: 3,
    nrOfPrevDmards: 25,
    cdaiAtBaseline: 28,
    dapsaAtBaseline: 19,
    meanChangesCdai: 6,
    meanChangesDapsa: 43,
    dataStatus: "delay-in-data",
    status: "created",
  },
  {
    studyId: "133453",
    patientId: "23433",
    age: 39,
    timeSinceDiagnosis: 1,
    nrOfPrevDmards: 4,
    cdaiAtBaseline: 4,
    dapsaAtBaseline: 4,
    meanChangesCdai: 6,
    meanChangesDapsa: 12,
    dataStatus: "no-issues",
    status: "created",
  },
  {
    studyId: "133453",
    patientId: "44432",
    age: 77,
    timeSinceDiagnosis: 1,
    nrOfPrevDmards: 4,
    cdaiAtBaseline: 41,
    dapsaAtBaseline: 14,
    meanChangesCdai: 64,
    meanChangesDapsa: 72,
    dataStatus: "no-issues",
    status: "active",
  },
  {
    studyId: "133453",
    patientId: "99322",
    age: 28,
    timeSinceDiagnosis: 1,
    nrOfPrevDmards: 24,
    cdaiAtBaseline: 34,
    dapsaAtBaseline: 44,
    meanChangesCdai: 56,
    meanChangesDapsa: 12,
    dataStatus: "no-issues",
    status: "active",
  },
];

const useHCPDashboard = () => {
  const [selectedStudyId, setSelectedStudyId] = useState();
  const [selectedPatientId, setSelectedPatientId] = useState();
  const [studies, setStudies] = useState([]);
  const [patients, setPatients] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const loadStudies = async () => {
    return new Promise((resolve) => {
      setTimeout(resolve(studiesList), 1000);
    });
  };

  const loadPatients = async (studyId) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const items = patientsList.filter(
          (patient) => patient.studyId === studyId
        );
        resolve(items);
      }, 1000);
    });
  };

  const filterStudies = ({ target: { value } }) => {
    setStudies(() =>
      studiesList.filter(({ title, studyId }) =>
        !!value
          ? title.indexOf(value) !== -1 || studyId.indexOf(value) !== -1
          : true
      )
    );
  };

  const filterPatients = ({ target: { value } }) => {
    setPatients(() =>
      patientsList.filter(({ patientId, studyId }) =>
        !!value
          ? studyId === selectedStudyId && patientId.indexOf(value) !== -1
          : studyId === selectedStudyId
      )
    );
  };

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const studies = await loadStudies();
        setStudies(studies);
        if (studies.length > 0) {
          setSelectedStudyId(studies[0].studyId);
        }
      } catch {
        console.error("Oups! Something went wrong!");
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  useEffect(() => {
    if (selectedStudyId) {
      (async () => {
        try {
          setIsLoading(true);
          const patients = await loadPatients(selectedStudyId);
          setPatients(patients);
          if (patients.length > 0) {
            setSelectedPatientId(patients[0].patientId);
          }
        } catch {
          console.error("Oups! Something went wrong!");
        } finally {
          setIsLoading(false);
        }
      })();
    }
  }, [selectedStudyId]);

  return {
    studies,
    patients,
    isLoading,
    selectedStudyId,
    selectedPatientId,
    setSelectedStudyId,
    setSelectedPatientId,
    filterStudies,
    filterPatients,
  };
};

export default useHCPDashboard;
