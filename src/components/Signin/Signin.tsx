import { ChangeEvent, FormEvent, useState } from 'react';
import { SigninForm } from './Signin.types';
import * as Styled from '../../App.styled';
import { CustomInput } from '../CustomInput';

type SigninProps = {
  onSubmit: (values: SigninForm) => void;
};

export const Signin = ({ onSubmit }: SigninProps) => {
  const [values, setValues] = useState<SigninForm>({
    email: '',
    password: '',
  });

  const isSubmitDisabled = !Object.values(values).map(value => value.trim()).some(Boolean);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValues(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(values);
  };

  return (
    <Styled.Container>
      <Styled.Title>Вход</Styled.Title>
      <Styled.Form onSubmit={handleSubmit}>
        <CustomInput
          id='email'
          type='email'
          name='email'
          label='Email'
          description='Введите адрес электронной почты'
          onChange={handleChange}
          value={values.email}
          required
        />
        <CustomInput
          id='password'
          type='password'
          name='password'
          label='Пароль'
          description='Введите пароль'
          onChange={handleChange}
          value={values.password}
          required
        />
        <Styled.Button type='submit' disabled={isSubmitDisabled}>Войти</Styled.Button>
      </Styled.Form>
    </Styled.Container>
  );
};
