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

  // perfil
  getPerfil: () => api.get('/userContracts'),
};

export { api };
export default Endpoints;
