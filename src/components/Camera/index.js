/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useCallback, useEffect } from 'react';
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

const config = {
  width: (metrics.SCREEN_WIDTH - 2 * metrics.XBIG) * 0.9,
  height: 200,
  includeBase64: true,
  useFrontCamera: true,
};

export const Camera = ({
  title,
  error,
  crop,
  hint,
  noForm,
  keyRef,
  value,
  onChangeImage,
}) => {
  const handleCamera = useCallback(() => {
    ImageCropPicker.openCamera({ ...config, cropping: crop }).then((image) =>
      onChangeImage((prev) => ({ ...prev, [keyRef]: image }))
    );
  }, []);

  console.log({ value, keyRef });
  return (
    <>
      {title && <Title noForm={noForm}>{title}</Title>}
      {hint && <Hint>{hint}</Hint>}
      {error && <ErrorText>{error}</ErrorText>}
      <CameraContainer>
        {value && value.path ? (
          <>
            <Photo source={{ uri: value.path }} />
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
