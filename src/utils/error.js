// Simplified error message thrown by API to display on FE
export const getSimplifiedError = (error) => {
  const errorResponse = error.response && (error.response.data || error.response.data.message);
  if (!errorResponse) {
    return 'Something went wrong, please try again later';
  }

  const errorKeys = Object.keys(errorResponse);
  if (errorKeys.includes('message')) {
    return errorResponse.message;
  }
  return errorResponse;
  //   if (errorKeys.includes('non_field_errors')) {
  //     return errorResponse.non_field_errors && errorResponse.non_field_errors[0];
  //   }
  //   if (errorKeys.includes('email')) {
  //     return errorResponse.email[0] || errorResponse.email.email[0];
  //   }
  //   const firstKey = errorKeys[0];
  //   return `${firstKey}: ${errorResponse[firstKey]}`;
};
