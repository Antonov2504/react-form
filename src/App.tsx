import { useState } from 'react';
import './App.css';
import { Signin } from './components/Signin';
import { SigninForm } from './components/Signin/Signin.types';
import { SignupForm } from './components/Signup/Signup.types';
import { Signup } from './components/Signup';

function App() {
  const [toggle, setToggle] = useState('signin');

  const onToggle = () => {
    setToggle(prevState => prevState === 'signin' ? 'signup' : 'signin');
  };

  const handleSignin = (values: SigninForm) => {
    console.log({ values });
  };

  const handleSignup = (values: SignupForm) => {
    console.log({ values });
  };

  return (
    <div className="App">
      <header className="App-header">
        {toggle === 'signin' && <Signin onSubmit={handleSignin} />}
        {toggle === 'signup' && <Signup onSubmit={handleSignup} />}
        <div className='App-toggle' onClick={onToggle}>{toggle === 'signin' ? 'Зарегистрироваться' : 'Войти'}</div>
      </header>
    </div>
  );
}

export default App;
