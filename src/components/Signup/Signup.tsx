import { ChangeEvent, FormEvent, useState } from 'react';
import { SignupForm } from './Signup.types';
import * as Styled from '../../App.styled';
import { CustomInput } from '../CustomInput';

type SignupProps = {
  onSubmit: (values: SignupForm) => void;
};

export const Signup = ({ onSubmit }: SignupProps) => {
  const [values, setValues] = useState<SignupForm>({
    name: '',
    login: '',
    email: '',
    gender: 'male',
    password: '',
    repeatPassword: '',
  });

  const isSubmitDisabled = !Object.values(values).map(value => value.trim()).every(Boolean);

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
      <Styled.Title>Регистрация</Styled.Title>
      <Styled.Form onSubmit={handleSubmit}>
        <CustomInput
          id='name'
          type='text'
          name='name'
          placeholder='Имя'
          label='Имя'
          description='Введите имя'
          onChange={handleChange}
          value={values.name}
          required
        />
        <CustomInput
          id='login'
          type='text'
          name='login'
          placeholder='Ник'
          label='Ник'
          description='Введите ник'
          onChange={handleChange}
          value={values.login}
          withIcon
          required
        />
        <CustomInput
          id='email'
          type='email'
          name='email'
          placeholder='Email'
          label='Email'
          description='Введите адрес электронной почты'
          onChange={handleChange}
          value={values.email}
          required
        />

        <Styled.Fieldset>
          <legend>Укажите пол:</legend>

          <Styled.RadioContainer>
            <input type="radio" id="male" name="gender" value="male" checked={values.gender === 'male'} onChange={handleChange} />
            <label htmlFor="male">Мужской</label>
          </Styled.RadioContainer>

          <Styled.RadioContainer>
            <input type="radio" id="female" name="gender" value="female" checked={values.gender === 'female'} onChange={handleChange} />
            <label htmlFor="female">Женский</label>
          </Styled.RadioContainer>
        </Styled.Fieldset>

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
        <CustomInput
          id='repeatPassword'
          type='password'
          name='repeatPassword'
          label='Пароль'
          description='Повторите пароль'
          onChange={handleChange}
          value={values.repeatPassword}
          required
        />
        <Styled.Button type='submit' disabled={isSubmitDisabled}>Зарегистрироваться</Styled.Button>
      </Styled.Form>
    </Styled.Container>
  );
};
