import api from './api';

const Endpoints = {
  // auth
  postSignIn: (data) => {
    return api.post('/sessions', data);
  },
  postSignUp: (data) => api.post('/users', data),

  // form
  postFormDrugstore: (body) => api.post('/drugstore', body),
};

export { api };
export default Endpoints;
