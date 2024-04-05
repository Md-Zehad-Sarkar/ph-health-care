export const timeFormatter = (value: string) => {
  // Create a new Date object from the input date string
  const dateObject = new Date(value);

  // Extract hours and minutes from the date object
  const hours = String(dateObject.getHours()).padStart(2, "0");
  const minutes = String(dateObject.getMinutes()).padStart(2, "0");

  // Create the desired time format "hh:mm"
  const formattedTime = `${hours}:${minutes}`;

  return formattedTime;
};
