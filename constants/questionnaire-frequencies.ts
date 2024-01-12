export enum QuestionnaireFrequency {
  OnceAWeek = "onceAWeek",
  EveryTwoWeeks = "everyTwoWeeks",
  EveryFourWeeks = "everyFourWeeks",
}

const QuestionnaireFrequencies = [
  {
    value: QuestionnaireFrequency.OnceAWeek,
    label: "Once a week",
  },
  {
    value: QuestionnaireFrequency.EveryTwoWeeks,
    label: "Every 2 weeks",
  },
  {
    value: QuestionnaireFrequency.EveryFourWeeks,
    label: "Every 4 weeks",
  },
];

export default QuestionnaireFrequencies;
