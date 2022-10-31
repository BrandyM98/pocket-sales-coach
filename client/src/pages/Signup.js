import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';

import Auth from '../utils/auth';

const Signup = () => {
  const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [addUser, { error, data }] = useMutation(ADD_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
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
          placeholder="Your username"
          name="username"
          type="text"
          value={formState.name}
          onChange={handleChange} />
           <br></br>
      </div>
      <div className='pt-1'>
        <input style={{width:'50%'}}
          placeholder="Your email"
          name="email"
          type="email"
          value={formState.email}
          onChange={handleChange} />
      </div>
      <br></br>
      <div>
        <input style={{width:'50%'}}
          placeholder="******"
          name="password"
          type="password"
          value={formState.password}
          onChange={handleChange} />
      </div>
      <br></br>
      <div>
        <button type="submit" className='bg-danger text-white' style={{width:'50%'}}>
          SUBMIT
        </button>
      </div>
      </form><p className='pt-2'>Already have an account?<a href='/login'>Login Here</a></p></>
    );
  };

  return (
    <main className='signup p-3 m-3 flex-wrap justify-content-space-between align-items-center text-center bg-dark text-white'>
      <h4 className='p-5 text-align'>SIGN UP</h4>
      <div>
        {renderForm()}
        {error && <div>{error.message}</div>}
      </div>
    </main>
  );
};

export default Signup;
