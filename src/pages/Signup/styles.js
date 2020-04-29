import styled from 'styled-components/native';
import { colors, metrics } from '../../styles';

export const Container = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    alignItems: 'center',
    width: '100%',
    padding: metrics.BIG,
  },
})`
  flex: 1;
  background: #f9f9f9;
`;

export const Logo = styled.Image`
  width: 200px;
  height: 75px;
  background: #fff;
  align-self: center;
  margin-bottom: 10px;
`;

export const AvatarView = styled.View`
  width: 100px;
  height: 100px;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`;

export const ButtonChangeAvatar = styled.TouchableOpacity`
  width: 100px;
  height: ${(props) => (props.photoIsSet ? '100px' : '100px')};
  margin-top: ${(props) => (props.photoIsSet ? '5px' : 0)};
  border-radius: 200px;
  border-width: 3px;
  border-color: #77a93a;
  align-items: center;
  justify-content: center;
  background: #c4c4c4;
  elevation: 10;
`;

export const Avatar = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 200px;
`;

export const AvatarText = styled.Text`
  font-weight: bold;
  font-size: 13.5px;
`;

export const ButtonsView = styled.View`
  padding-bottom: 30px;
  width: 90%;
  align-items: center;
`;
