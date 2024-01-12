export const parseDateFromString = (dateString: string): Date | null => {
  const parts = dateString.split("/");

  if (parts.length === 3) {
    const [day, month, year] = parts.map(Number);

    if (!isNaN(day) && !isNaN(month) && !isNaN(year)) {
      return new Date(year, month - 1, day);
    }
  }
  return null;
};
