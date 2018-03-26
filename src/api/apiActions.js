export const GET_API_ACTION = 'GET_API_ACTION';

export const getApiAction = body => ({
  type: GET_API_ACTION,
  ...body,
});
