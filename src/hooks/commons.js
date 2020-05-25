import {
  useIsFocused,
  useNavigation,
  useRoute,
} from '@react-navigation/native';

export const useCommons = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const isFocused = useIsFocused();

  return { navigation, route, isFocused };
};
