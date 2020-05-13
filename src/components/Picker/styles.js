import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { colors, metrics } from '../../styles';

export const Title = styled.Text`
  color: ${colors.DARK};
  margin-bottom: ${metrics.XSMALL}px;
  font-size: 14px;
  align-self: flex-start;
`;

export const ErrorText = styled.Text`
  font-size: 12px;
  padding-left: ${metrics.XSMALL};
  color: ${colors.RED};
  margin-bottom: ${metrics.XXSMALL}px;
  align-self: flex-start;
`;

export const PickerView = styled.View`
  align-items: center;
  justify-content: center;
  margin-bottom: ${metrics.BIG};
  width: 100%;
`;

export const InstructionView = styled.View`
  position: relative;
  align-self: stretch;
  justify-content: center;
`;

export const InstructionText = styled.Text`
  font-size: 15px;
  padding: 15px;
  width: 100%;
  align-self: center;
  border-width: 1px;
  border-radius: 10px;
  border-color: ${colors.GREY};
  color: ${colors.LIGHT_BLACK};
`;

export const IconView = styled.TouchableOpacity`
  position: absolute;
  align-self: flex-end;
  justify-content: center;
  height: 40px;
  width: 35px;
  padding: 2px;
  elevation: 10;
`;

export const WithOutFeedBack = styled.TouchableWithoutFeedback``;

//
export const ModalPicker = styled.Modal``;

export const ContainerModal = styled.TouchableOpacity`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: flex-end;
  background-color: #00000022;
`;

export const BoxOptions = styled.View`
  display: flex;
  width: 100%;
  max-height: ${metrics.SCREEN_HEIGHT * 0.5};
  align-items: center;
  justify-content: flex-end;
  background-color: ${colors.WHITE};
  border-top-left-radius: ${metrics.RADIUS};
  border-top-right-radius: ${metrics.RADIUS};
  padding-bottom: ${metrics.BIG};
  padding-top: ${metrics.MEDIUM};
`;

export const Scroll = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    alignItems: 'center',
  },
})`
  max-height: ${metrics.SCREEN_HEIGHT * 0.5};
  width: 100%;
`;

export const Options = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 45px;
`;

export const TextOptions = styled.Text`
  font-size: 16px;
  color: ${colors.DARK_STRONG};
`;

// icons
export const CheckIcon = styled(Icon).attrs({
  name: 'check',
  size: 18,
  color: colors.SECONDARY,
})`
  margin-right: 5px;
`;
