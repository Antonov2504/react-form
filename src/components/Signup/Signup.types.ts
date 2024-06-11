type GenderTypes = 'male' | 'female';

export type SignupForm = {
  name: string;
  login: string;
  email: string;
  gender: GenderTypes;
  password: string;
  repeatPassword: string;
};
