import React, { useState, useCallback } from 'react';
import ImageCropPicker from 'react-native-image-crop-picker';
import { Button } from '../ButtonRect';
import { metrics } from '../../styles';

import {
  ErrorText,
  Hint,
  Title,
  CameraContainer,
  Photo,
  ChangeButton,
  ChangeButtonText,
} from './styles';

export const Camera = ({ title, error, crop, hint, noForm }) => {
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
      {title && <Title noForm={noForm}>{title}</Title>}
      {hint && <Hint>{hint}</Hint>}
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
