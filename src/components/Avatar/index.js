import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { AvatarView, ButtonChangeAvatar, Photo, AvatarText } from './styles';

export const Avatar = ({ handleOnPress, photoIsSet, source }) => (
  <AvatarView>
    <ButtonChangeAvatar onPress={handleOnPress} photoIsSet={photoIsSet}>
      {photoIsSet ? (
        <Photo source={source} style={{ resizeMode: 'cover' }} />
      ) : (
          <>
            <Icon name="photo-camera" size={25} />
            <AvatarText>Escolher foto</AvatarText>
          </>
        )}
    </ButtonChangeAvatar>
  </AvatarView>
);
