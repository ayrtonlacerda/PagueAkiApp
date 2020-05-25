import api from './api';

const Endpoints = {
  // auth
  postSignIn: (data) => {
    return api.post('/sessions', data);
  },

  // signup
  postSignUp: (data) => api.post('/users', data),

  // perfil
  getPerfil: () => api.get('/userContracts'),

  // form
  postFormDrugstore: (body) => api.post('/drugstore', body),
  postFilesDrugstore: (formData) =>
    api.post('/drugstoreFiles', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }),
  postFormTrucks: (body) => api.post('/trucks', body),
};

export { api };
export default Endpoints;
