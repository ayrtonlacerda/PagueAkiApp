import api from './api';

const Endpoints = {
  // auth
  postSignIn: (data) => {
    return api.post('/sessions', data);
  },

  // signup
  postSignUp: (data) => api.post('/users', data),

  // form
  postFormDrugstore: (body) => api.post('/drugstore', body),
  postFilesDrugstore: (formData) =>
    api.post('/drugstoreFiles', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }),
};

export { api };
export default Endpoints;
