import { useState, useEffect, useCallback, useMemo } from 'react';

const pt = {
  'this is a required field': 'esse campo é obrigatorio',
  'this must be a valid email': 'e-mail inválido',
  'this must be at least 6 characters': 'mínimo 6 caracteres',
  'this must be at least 8 characters': 'mínimo 8 caracteres',
};

export const useValidation = (form, FORM) => {
  console.log({ formChange: form });
  const [error, setError] = useState({});
  const [first, setFirst] = useState(false);
  const [schema, setSchema] = useState({});
  const [formSchema, setFormShema] = useState(form);

  useEffect(() => {
    // varre o form e constroi o schema de validação
    let tmpSchema = {};
    FORM.map((step) =>
      step.components.map((item) => {
        if (
          (item.validator && !item.dependency) ||
          (item.dependency && item.conditional === form[item.dependency])
        ) {
          tmpSchema = {
            ...tmpSchema,
            [item.key]: item.validator,
          };
        }
      })
    );
    setSchema(tmpSchema);
  }, [FORM, form]);

  useEffect(() => {
    setFormShema(form);
  }, [form]);

  const formValid = useCallback(() => {
    console.log({ formuseCallback: formSchema });
    setFirst(true);

    Object.keys(schema).map(async (keySchema) => {
      Object.keys(formSchema).map(async (keyForm) => {
        if (keySchema === keyForm) {
          try {
            const result = await schema[keySchema].validate(form[keyForm]);
            delete error[keyForm];
            setError({ ...error });
          } catch (err) {
            console.log({ ERROR_VALIDATION: err.errors, keyForm });
            // error[keyForm] = pt[err.errors[0]];
            // error[keyForm] = err.errors[0];
            setError((prevState) => ({
              ...prevState,
              [keyForm]: pt[err.errors[0]],
            }));
            console.log('ta bugando aqui');
          }
        }
      });
    });
    /* if (Object.keys(error).length === 0) {
      setError(false);
    } */
    console.log({ errorTest: error });
  }, [formSchema, form, schema]);

  const err = useMemo(
    () => (Object.keys(error).length === 0 && first ? false : error),
    [error, first]
  );
  return [formValid, error, schema];
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
