import React, { useState, useCallback } from 'react';
import ImagePicker from 'react-native-image-picker';
import ImageCropPicker from 'react-native-image-crop-picker';
import { Button } from '../ButtonRect';
import { metrics } from '../../styles';

import {
  ErrorText,
  Title,
  CameraContainer,
  Photo,
  ChangeButton,
  ChangeButtonText,
} from './styles';

export const Camera = ({ title, error, crop }) => {
  const [photo, setPhoto] = useState(null);

  const handleCamera = useCallback(() => {
    ImageCropPicker.openCamera({
      width: (metrics.SCREEN_WIDTH - 2 * metrics.XBIG) * 0.9,
      height: 200,
      cropping: crop,
      includeBase64: true,
      useFrontCamera: true,
    }).then((image) => {
      setPhoto(image);
    });
  }, [photo]);

  return (
    <>
      {title && <Title>{title}</Title>}
      {error && <ErrorText>{error}</ErrorText>}
      <CameraContainer>
        {photo && photo.path ? (
          <>
            <Photo source={{ uri: photo.path }} />
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
