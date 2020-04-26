import styled from 'styled-components';

export const Input = styled.TextInput`
  height: 48px;
  background: ${(props) =>
    props.background ? `#${props.background}` : '#e9e9e9'};
  border-radius: 9px;
  padding-left: ${(props) =>
    props.paddingLeft ? `${props.paddingLeft}px` : '20px'};
  margin: 10px 0;
  margin-bottom: ${(props) => (props.error ? '3px' : '10px')};
`;

export const ErrorText = styled.Text`
  font-size: 10px;
  padding-bottom: 8px;
  padding-left: 15px;
  font-weight: bold;
  color: #ff0000;
`;
