export const dateFormatter = (value: string) => {
  // Create a new Date object from the input date string
  const dateObject = new Date(value);

  // Extract the year, month, and day from the date object
  const year = dateObject.getFullYear();
  const month = String(dateObject.getMonth() + 1).padStart(2, "0"); // Month is zero-based, so we add 1
  const day = String(dateObject.getDate()).padStart(2, "0");

  // Create the desired date format "yyyy-mm-dd"
  const formattedDate = `${year}-${month}-${day}`;

  return formattedDate;
};
