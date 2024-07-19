const handleResponse = (
  res,
  statusCode,
  message,
  data = null,
  errorName = null
) => {
  const response = { message, success: statusCode < 400 };
  if (data !== null) {
    response.data = data;
  }
  if (errorName) {
    response.errorName = errorName;
  }
  return res.status(statusCode).json(response);
};

module.exports = handleResponse;
