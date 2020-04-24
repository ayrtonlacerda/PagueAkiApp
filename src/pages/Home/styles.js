import styled from 'styled-components';

export const Container = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
  flex: 1;
  padding: 10px;
  background: #f9f9f9;
`;

export const PageView = styled.View`
  flex: 1;
  margin-bottom: 63%;
`;

export const Logo = styled.Image`
  width: 73%;
  height: 13%;
  background: #fff;
  align-self: center;
`;

export const Card = styled.View`
  height: 27%;
  background: #77a93a;
  margin-right: 5%;
  margin-left: 5%;
  margin-bottom: 6%;
  margin-top: 1%;
  border-radius: 20px;
`;

export const CardTopView = styled.View`
  flex-direction: row;
  flex: 1;
  padding: 13px;
  align-items: center;
`;

export const CardTitleText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 21px;
  flex: 1;
`;

export const CardImage = styled.Image`
  width: 21.5%;
  height: 100%;
  border-radius: 10px;
`;

export const CardBottomView = styled.View`
  flex: 1.3;
  padding-left: 13px;
`;

export const CardDescriptionText = styled.Text.attrs({
  numberOfLines: 3,
})`
  color: #fff;
  font-size: 14px;
  flex: 1;
`;
