const disturbancesEnum = {
  NotAtAll: "0",
  OneToThree: "1",
  FourToSeven: "2",
  EightToFourteen: "3",
  FifteenToTwentyOne: "4",
  TwentyTwoToThirtyOne: "5",
};

const list = [
  { value: disturbancesEnum.NotAtAll, label: "Not at all" },
  { value: disturbancesEnum.OneToThree, label: "1-3 days" },
  { value: disturbancesEnum.FourToSeven, label: "4-7 days" },
  { value: disturbancesEnum.EightToFourteen, label: "8-14 days" },
  { value: disturbancesEnum.FifteenToTwentyOne, label: "15-21 days" },
  { value: disturbancesEnum.TwentyTwoToThirtyOne, label: "22-31 days" },
];

const SleepDisturbances = {
  Enum: disturbancesEnum,
  List: list,
};

export default SleepDisturbances;
