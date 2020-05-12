import React, { useState, useCallback } from 'react';
import ImagePicker from 'react-native-image-picker';
import { Button } from '../ButtonRect';

import {
  ErrorText,
  Title,
  CameraContainer,
  Photo,
  ChangeButton,
  ChangeButtonText,
} from './styles';

const cameraOptions = {
  title: 'Escolha uma das opções',
  cancelButtonTitle: 'Cancelar',
  takePhotoButtonTitle: 'Tirar uma foto',
  chooseFromLibraryButtonTitle: 'Escolher uma foto',
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
  mediaType: 'mixed',
};

export const Camera = ({ keyRef, title, error, onChangeOption }) => {
  const [image, setImage] = useState(null);

  const handleCamera = useCallback(() => {
    ImagePicker.showImagePicker(cameraOptions, (res) => setImage(res));
  }, [image]);

  return (
    <>
      {title && <Title>{title}</Title>}
      {error && <ErrorText>{error}</ErrorText>}
      <CameraContainer>
        {image && image.uri ? (
          <>
            <Photo source={image} />
            <ChangeButton onPress={handleCamera}>
              <ChangeButtonText>Tirar outra foto</ChangeButtonText>
            </ChangeButton>
          </>
        ) : (
            <Button text="Tirar foto" margin={5} handleOnPress={handleCamera} />
          )}
      </CameraContainer>
    </>
  );
};
