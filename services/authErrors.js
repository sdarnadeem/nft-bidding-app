export function returnErrorMessage(error) {
  const errorMessage = error?.response?.data?.error?.message;

  if (errorMessage === "EMAIL_NOT_FOUND") {
    return "Email or Password invalid";
  } else if (errorMessage === "INVALID_PASSWORD:") {
    return "Email or Password invalid";
  } else if (errorMessage === "USER_DISABLED") {
    return "User Disabled";
  } else {
    return "Something went wrong, please try again later.";
  }
}
