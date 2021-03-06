import React, { useContext, useState } from 'react';
import { useForm, ErrorMessage } from 'react-hook-form';
import { Link, Redirect } from 'react-router-dom';
import FormInputError from '../FormInputError';
// import { loginUser } from '../../api';
import { UserContext } from '../../context/UserContext';

const Login = (props) => {
  const { register, errors, handleSubmit } = useForm();

  // read in context
  const { loginUser } = useContext(UserContext);

  const [redirect, setRedirect] = useState(false);

  function onSubmit({ username, password }) {
    const userData = {
      username,
      password,
    };
    loginUser(userData);
    console.log(props);
    setRedirect(true);
  }

  return (
    <div className="container">
      {/* redirect to home */}
      {redirect ? <Redirect to="/quotes" /> : null}
      <Link to="/">Back to home</Link>
      <div className="card">
        <div className="card-body">
          <h3 className="card-title">
            <b>Login</b>
          </h3>
          <form>
            <div className="form-group">
              <p>Username</p>
              <input
                type="text"
                placeholder="Username..."
                name="username"
                ref={register({ required: 'Please type your username' })}
                className="form-control"
              />
              <ErrorMessage errors={errors} name="username">
                {({ message }) => <FormInputError message={message} />}
              </ErrorMessage>
            </div>
            <div className="form-group">
              <label className="control-label">Password</label>
              <input
                type="password"
                name="password"
                ref={register({ required: 'Please type your password' })}
                className="form-control"
              />
              <ErrorMessage errors={errors} name="password">
                {({ message }) => <FormInputError message={message} />}
              </ErrorMessage>
            </div>
            <span className="input-group-btn">
              <button className="btn btn-primary" onClick={handleSubmit(onSubmit)}>
                Login
              </button>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
