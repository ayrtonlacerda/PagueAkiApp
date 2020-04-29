import create from 'zustand';
import Ept from '../services';
import * as NavigationService from '../routes/NavigationService';

// two types - postSignIn, postSignUp
const fetch = async (set, body, type) => {
  try {
    set({ loading: true });
    const response = await Ept[type](body);
    set({ data: response.data.user, loading: false });
    NavigationService.navigate('Home');
  } catch (error) {
    console.log({ ERRO_SIGN_UP: error.response.data });
    // set({ error: 'Verifique os dados e tente novamente', loading: false });
  }
};

const [useAuth] = create((set) => ({
  data: null,
  error: null,
  loading: false,
  fetchAuth: (data, type) => fetch(set, data, type),
}));

export { useAuth };
