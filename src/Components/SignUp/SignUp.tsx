import React, { useRef, useState } from 'react';
import './SignUp.css';
import { useAuth } from '../../Context/AuthContext';
import { Link, useHistory } from 'react-router-dom';

export const SignUp: React.FC = () => {

     const emailRef = useRef<HTMLInputElement>(null);
     const passwordRef = useRef<HTMLInputElement>(null);
     const passwordConfirmRef = useRef<HTMLInputElement>(null);

     const [loading, setLoading] = useState<boolean>(false);
     const [error, setError] = useState<string>('');

     const history = useHistory();

     const { signup } = useAuth();

     const handleSubmit: ((event: React.FormEvent<HTMLFormElement>) => void) = async (e) => {
          e.preventDefault();
          let password = passwordRef.current?.value;
          let passwordConfirm = passwordConfirmRef.current?.value;
          let email = emailRef.current?.value;
          if (password !== passwordConfirm) {
               return setError("Passwords don't match!");
          }
          if (email === '' || password === '' || passwordConfirm === '') {
               return setError("Enter all fields!");
          }
          try {
               setError("");
               setLoading(true);
               await signup(email, password);
               history.push("/");
          } catch {
               setError("Failed to create account, please try again!");
          }
          setLoading(false);

     }
          return (
               <div className="formContainer">

                    <h1 className="heading">
                         Create a new account!
                    </h1>

                    {
                         error && <div className="alert">{ error }</div>
                    }

                    <form className="form" onSubmit={handleSubmit}>

                         <div className="inputGroup">
                              <input 
                                   type="email" 
                                   className="inputF"
                                   id="email"
                                   name="email"
                                   placeholder="Email Address"
                                   ref={ emailRef }
                              />
                              <label htmlFor="email" className="inputLabel">
                                   Email Address
                              </label>
                         </div>

                         <div className="inputGroup">
                              <input 
                                   type="password" 
                                   className="inputF"
                                   id="password"
                                   name="password"
                                   placeholder="Password"
                                   ref={ passwordRef }
                              />
                              <label htmlFor="password" className="inputLabel">
                                   Password
                              </label>
                         </div>

                         <div className="inputGroup">
                              <input 
                                   type="password" 
                                   className="inputF"
                                   id="passwordConfirm"
                                   name="passwordConfirm"
                                   placeholder="passwordConfirm"
                                   ref={ passwordConfirmRef }
                              />
                              <label htmlFor="passwordConfirm" className="inputLabel">
                                   Password Confirm
                              </label>
                         </div>

                         <button 
                              disabled={loading} 
                              type="submit" 
                              className="signup btn"
                         >
                              Sign Up
                         </button>

                    </form>

                    <div className="footer">
                         <p className="foot">
                              Already have an account? <Link to="/signin">Sign In</Link>
                         </p>
                    </div>

               </div>
          );
}