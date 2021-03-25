export const apiError = (res, status, error) =>
  res.status(status).json({
    error
  })
