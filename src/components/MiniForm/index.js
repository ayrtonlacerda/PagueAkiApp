import React, { useState, useCallback, useEffect } from 'react';
import { Container } from './styles';
import Option from './option';
import { ButtonTouchable } from '../Button';

const MiniForm = ({
  components = [],
  limit,
  keyRef,
  onChangeOption,
  value,
}) => {
  useEffect(() => {
    if (!value) {
      onChangeOption((prevState) => ({ ...prevState, [keyRef]: [] }));
    }
  }, [value]);

  const handleAddOption = useCallback(() => {
    let schema = {};
    components.map(
      // eslint-disable-next-line no-return-assign
      (item) =>
        (schema = {
          ...schema,
          [item.key]: null,
        })
    );
    onChangeOption((prevStateForm) => ({
      ...prevStateForm,
      [keyRef]: [...prevStateForm[keyRef], { ...schema }],
    }));
    // setOptions((prev) => [...prev, { ...schema }]);
  }, [value]);

  const handleRemoveOption = useCallback(
    (index) => {
      console.log({ index });
      onChangeOption((prevStateForm) => ({
        ...prevStateForm,
        [keyRef]: prevStateForm[keyRef].filter(
          (_, itemIndex) => itemIndex !== index
        ),
      }));
      // setOptions(options.filter((_, itemIndex) => itemIndex !== index));
    },
    [value]
  );

  const handleSetOptions = useCallback((key, index, valueMiniForm) => {
    onChangeOption((prevStateForm) => ({
      ...prevStateForm,
      [keyRef]: prevStateForm[keyRef].map((itemOpt, i) =>
        i === index
          ? {
              ...itemOpt,
              [key]: valueMiniForm,
            }
          : itemOpt
      ),
    }));
  }, []);

  console.log({ value, keyRef });
  return (
    <Container>
      {value &&
        value.map((opt, index) => (
          <Option
            onChangeForm={handleSetOptions}
            index={index}
            components={components}
            values={opt}
            onClickRemove={handleRemoveOption}
          />
        ))}
      {(!value || value.length < limit) && (
        <ButtonTouchable text="ADICIONAR" handleOnPress={handleAddOption} />
      )}
    </Container>
  );
};

export { MiniForm };
