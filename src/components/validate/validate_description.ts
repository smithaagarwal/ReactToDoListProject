const validateDescription: (description: string) => string[] = (
  description
) => {
  const errorMessages: string[] = [];
  if (description.length == 0)
    errorMessages.push("Description cannot be blank");
  else {
    if (description.length < 3 || description.length > 255)
      errorMessages.push(
        "Description length should be between 3 and 255 characters"
      );
  }
  return errorMessages;
};

export default validateDescription;
