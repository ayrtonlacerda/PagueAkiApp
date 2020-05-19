import React, { useState, useCallback, useEffect } from 'react';
import { Container } from './styles';
import Option from './option';
import { ButtonTouchable } from '../Button';

const MiniForm = ({ components = [], limit }) => {
  const [options, setOptions] = useState([]);

  const handleAddOption = useCallback(() => {
    console.log({ options });
    let schema = {};
    components.map(
      // eslint-disable-next-line no-return-assign
      (item) =>
        (schema = {
          ...schema,
          [item.key]: null,
        })
    );
    setOptions((prev) => [...prev, { ...schema }]);
  }, [options]);

  const handleRemoveOption = useCallback(
    (index) => {
      console.log({ index, options });
      setOptions(options.filter((_, itemIndex) => itemIndex !== index));
    },
    [options]
  );

  console.log({ options });
  return (
    <Container>
      {options.map((opt, index) => (
        <Option
          options={options}
          onChangeForm={setOptions}
          index={index}
          components={components}
          values={opt}
          onClickRemove={handleRemoveOption}
        />
      ))}
      {options.length < limit && (
        <ButtonTouchable text="ADICIONAR" handleOnPress={handleAddOption} />
      )}
    </Container>
  );
};

export { MiniForm };
