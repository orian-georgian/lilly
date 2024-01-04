export default function calculateYearsFromNow(startDate) {
  // Parse the start date string into a Date object
  const startDateObject = new Date(startDate);

  // Get the current date
  const currentDate = new Date();

  // Calculate the time difference in milliseconds
  const timeDifference = currentDate - startDateObject;

  // Convert the time difference to years
  const yearsDifference = timeDifference / (1000 * 60 * 60 * 24 * 365.25);

  return `${yearsDifference.toFixed(2)} years`;
}
