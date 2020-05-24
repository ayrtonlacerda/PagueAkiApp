import { useState, useCallback, useMemo } from 'react';

const pt = {
  'this is a required field': 'esse campo é obrigatorio',
  'this must be a valid email': 'e-mail inválido',
  'this must be at least 6 characters': 'mínimo 6 caracteres',
  'this must be at least 8 characters': 'mínimo 8 caracteres',
  'this must be at least 11 characters': 'Telefone com DDD e 9 na frente',
};

export const useValidation = (schema) => {
  const [priv, setPrivate] = useState(true);
  const [error, setError] = useState({});
  const [first, setFirst] = useState(false);

  const formValid = useCallback(
    (form) => {
      setFirst(true);
      Object.keys(schema).map((keySchema) => {
        Object.keys(form).map(async (keyForm) => {
          if (keySchema === keyForm) {
            try {
              await schema[keySchema].validate(form[keyForm]);
              delete error[keyForm];
              setError({ ...error });
            } catch (err) {
              console.log({ ERROR_VALIDATE: err });
              error[keyForm] = pt[err.errors[0]];
              setError({ ...error });
            }
          }
        });
      });
    },
    [schema, error]
  );

  const privateFormaValid = useCallback(async (param, validations) => {
    try {
      await validations.validate(param);
      setPrivate(false);
    } catch (err) {}
  }, []);

  const err = useMemo(
    () => (Object.keys(error).length === 0 && first ? false : error),
    [error, first]
  );
  return [err, formValid, privateFormaValid, priv];
};
/*
privateError = {
  Email: true,
}

  const private = privateError.filter(item => item.key === keyForm)

  email() - this must be a valid email
  min(8) - this must be at least 8 characters
*/
/*

const schema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().min(6).required(),
});
const emailIsValid = yup.string().email().required();
const passIsValid = yup.string().min(6).required();

const Login = () => {
  const navigation = useNavigation();
  const [check, setCheck] = useState(true);
  const [form, setForm] = useState({ email: '', pass: '' });

  const confirm = async () => {
    try {
      const valid = await passIsValid.validate(form.pass);
      console.log({ valid });
    } catch (err) {
      console.log({ err });
    }
  };

  useEffect(() => {
    console.log({ form });
    confirm();
  }, [form]);

*/
