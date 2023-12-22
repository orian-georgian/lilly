const statusesEnum = {
  Completed: "completed",
  NotCompleted: "not-completed",
  PartiallyAnswered: "partially-answered",
  Pending: "pending",
};

const list = [
  {
    value: statusesEnum.Completed,
    label: "Completed",
  },
  {
    value: statusesEnum.NotCompleted,
    label: "Not Completed",
  },
  {
    value: statusesEnum.PartiallyAnswered,
    label: "Partially Answered",
  },
  {
    value: statusesEnum.Pending,
    label: "Pending",
  },
];

const QuestionaireStatuses = {
  Enum: statusesEnum,
  List: list,
};

export default QuestionaireStatuses;
