export enum RecurrencePattern {
  Daily = "daily",
  Weekly = "weekly",
  Monthly = "monthly",
  Yearly = "yearly",
}

const RecurrencePatterns = [
  {
    value: RecurrencePattern.Daily,
    label: "Daily",
  },
  {
    value: RecurrencePattern.Weekly,
    label: "Weekly",
  },
  {
    value: RecurrencePattern.Monthly,
    label: "Monthly",
  },
  {
    value: RecurrencePattern.Yearly,
    label: "Yearly",
  },
];

export default RecurrencePatterns;
