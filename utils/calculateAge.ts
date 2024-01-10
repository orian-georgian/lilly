const calculateAge = (date: Date | string): number | string => {
  // abort if date is not passed
  if (!date) return "";

  // Parse the date string to a Date object
  const birthDate = new Date(date);

  // Get the current date
  const currentDate: Date = new Date();

  // Calculate the difference in years
  const age: number = currentDate.getFullYear() - birthDate.getFullYear();

  // Check if the birthday has occurred this year
  const hasBirthdayOccurred: boolean =
    currentDate.getMonth() > birthDate.getMonth() ||
    (currentDate.getMonth() === birthDate.getMonth() &&
      currentDate.getDate() >= birthDate.getDate());

  // Adjust the age if the birthday has not occurred yet this year
  const finalAge: number = hasBirthdayOccurred ? age : age - 1;

  return finalAge;
};

export default calculateAge;
