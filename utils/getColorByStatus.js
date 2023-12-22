import { QuestionaireStatuses } from "@lilly/constants";

const getColorByStatus = (status) => {
  let color = null;

  switch (status) {
    case QuestionaireStatuses.Enum.Completed:
      color = "green";
      break;
    case QuestionaireStatuses.Enum.NotCompleted:
      color = "lilly-red";
      break;
    case QuestionaireStatuses.Enum.PartiallyAnswered:
    case QuestionaireStatuses.Enum.Pending:
      color = "yellow";
      break;
    default:
      color = "gray";
  }

  return color;
};

export default getColorByStatus;
