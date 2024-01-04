const exercisesEnum = {
  Walking: "walking",
  FlowingMovements: "flowingMovements",
  WorkingOutInWater: "workingOutInWater",
  Cycling: "cycling",
  StrengthTraining: "strengthTraining",
  HandExercise: "handExercise",
};

const list = [
  {
    value: exercisesEnum.Walking,
    label: "Walking",
    description:
      "Helps with aerobic conditioning and mood. 30-60 min, 3-5 times/week",
  },
  { value: "stretching", label: "Stretching", description: "stretching" },
  {
    value: exercisesEnum.FlowingMovements,
    label: "Flowing Movements",
    description: "flowingMovements",
  },
  {
    value: exercisesEnum.WorkingOutInWater,
    label: "Working out in Water",
    description: "workingOutInWater",
  },
  { value: exercisesEnum.Cycling, label: "Cycling", description: "cycling" },
  {
    value: exercisesEnum.StrengthTraining,
    label: "Strength Training",
    description: "strengthTraining",
  },
  {
    value: exercisesEnum.HandExercise,
    label: "Hand Exercise",
    description: "handExercise",
  },
];

const Exercises = {
  Enum: exercisesEnum,
  List: list,
};

export default Exercises;
