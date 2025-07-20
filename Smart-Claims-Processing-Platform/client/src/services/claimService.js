import api from './api';

export const submitClaim = (formData) => api.post('/claims', formData);
export const getClaimStatus = (claimId) => api.get(`/claims/${claimId}/status`);
export const getAllClaims = () => api.get('/claims');
