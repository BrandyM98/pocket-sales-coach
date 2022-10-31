import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth';

const Login = () => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error, data }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: '',
      password: '',
    });
  };

  const renderForm = () => {
    if (data) {
      return (
        <p>
          Success! You may now head{' '}
          <Link to="/">back to the homepage.</Link>
        </p>
      )
    }
    return (
      <><form onSubmit={handleFormSubmit}>
      <div className='mb-3'>
        <input style={{width:'50%'}}
          placeholder="Your email"
          name="email"
          type="email"
          value={formState.email}
          onChange={handleChange} />
          <br></br>
      </div>
      <div className='mb-3'>
        <input style={{width:'50%'}}
          placeholder="******"
          name="password"
          type="password"
          value={formState.password}
          onChange={handleChange} />
          <br></br>
      </div>
      <div className='pt-1' >
        <button type="submit" className='bg-danger text-white' style={{width:'50%'}}>
          SUBMIT
        </button>
      </div>
      </form><p className='pt-2'>Need to create an account?<a href='/signup'>Signup here</a></p></>
    );
  };

  return (
    <main className='login p-3 m-3 flex-wrap justify-content-space-between align-items-center text-center bg-dark text-white'>
      <h4 className='p-5 text-align'>LOGIN</h4>
      <div>
        {renderForm()}
        {error && <div>{error.message}</div>}
      </div>
    </main>
  );
};

export default Login;
