import styled from 'styled-components';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { colors } from '../../styles';

export const Container = styled.View`
  flex: 1;
  padding: 15px;
  background: #f9f9f9;
`;
export const Logout = styled.TouchableOpacity`
  align-self: flex-end;
`;

export const LogoutText = styled.Text`
  color: #cd0000;
  font-weight: bold;
  font-size: 14px;
`;

export const IconExit = styled(Icon).attrs({
  name: 'exit-to-app',
  size: 30,
  color: colors.DARK_STRONG,
})``;

export const AvatarView = styled.View`
  height: 100px;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  flex-direction: row;
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

export const ButtonChange = styled.TouchableOpacity`
  align-self: flex-end;
  background: #77a93a;
  border-radius: 10px;
  width: 23px;
  height: 23px;
  justify-content: center;
  align-items: center;
  margin-left: -38px;
  elevation: 15;
`;

export const Avatar = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 200px;
`;

export const InfosView = styled.View`
  width: 100%;
`;

export const TitleText = styled.Text`
  margin-top: 25px;
  color: #5b5b5b;
  font-size: 13px;
`;

export const UserText = styled.Text`
  color: #000;
  font-size: 15px;
`;

export const UserPhoneText = styled.Text``;

export const Line = styled.View`
  height: 1px;
  background: #77a93a;
  margin-top: 18px;
`;

export const Services = styled.View`
  margin-top: 23px;
`;

export const ServicesText = styled.Text`
  color: #5b5b5b;
  font-size: 15px;
`;

export const ServiceCard = styled.View`
  flex-direction: row;
  height: 65px;
  align-items: center;
  padding: 7px;
  padding-left: 15px;
  border-radius: 15px;
  margin-top: 20px;
  background: ${(props) =>
    props.cardColor ? `#${props.cardColor}` : '#77a93a'};
`;
export const ServiceCardImage = styled.Image`
  width: 21.5%;
  height: 100%;
  border-radius: 10px;
  margin-right: 8px;
`;
export const ServiceCardText = styled.Text`
  flex: 1;
  color: #fff;
  font-weight: bold;
  font-size: 19px;
`;
