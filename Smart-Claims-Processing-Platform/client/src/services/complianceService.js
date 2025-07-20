import api from './api';

export const validatePolicy = (claimData) =>
  api.post('/compliance/check', claimData);
