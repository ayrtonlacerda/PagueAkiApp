import { useNavigation, useRoute } from '@react-navigation/native';

export const useCommons = () => {
  const navigation = useNavigation();
  const route = useRoute();

  return { navigation, route };
};
