export default function calculateYearsFromNow(startDate: Date): string {
  // abort if startDate not present
  if (!startDate) return "";

  // Parse the start date string into a Date object
  const startDateObject: Date = new Date(startDate);

  // Get the current date
  const currentDate: Date = new Date();

  // Calculate the time difference in milliseconds
  const timeDifference: number =
    currentDate.getTime() - startDateObject.getTime();

  // Convert the time difference to years
  const yearsDifference = timeDifference / (1000 * 60 * 60 * 24 * 365.25);

  return `${yearsDifference.toFixed(2)} years`;
}
