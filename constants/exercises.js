const exercisesEnum = {
  Walking: "walking",
  Stretching: "stretching",
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
  {
    value: exercisesEnum.Stretching,
    label: "Stretching",
    description:
      "Helps with flexibility and range of motion. 10-15 min, 2 times/week",
  },
  {
    value: exercisesEnum.FlowingMovements,
    label: "Flowing Movements",
    description:
      "Helps with flexibility, range of motion, balance and stress. 10-15 min, 2 times/week",
  },
  {
    value: exercisesEnum.WorkingOutInWater,
    label: "Working out in Water",
    description:
      "Helps with flexibility, range of motion, aerobic conditioning and strength. 30-60 min, 3-5 times/week",
  },
  {
    value: exercisesEnum.Cycling,
    label: "Cycling",
    description:
      "Improves range of motion, aerobic conditioning, endurance and leg strength. 30-60 min, 3-5 times/week",
  },
  {
    value: exercisesEnum.StrengthTraining,
    label: "Strength Training",
    description:
      "Helps with strength and aerobic condition. 8-12 repetitions for 2-3 sets, 2-3 times/week",
  },
  {
    value: exercisesEnum.HandExercise,
    label: "Hand Exercise",
    description: "Improves range of motion and flexibility.",
  },
];

const Exercises = {
  Enum: exercisesEnum,
  List: list,
};

export default Exercises;
