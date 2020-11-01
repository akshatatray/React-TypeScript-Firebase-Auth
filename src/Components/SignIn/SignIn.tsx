import React, { useRef, useState } from 'react';
import './SignIn.css';
import { useAuth } from '../../Context/AuthContext';
import { Link, useHistory } from 'react-router-dom';

export const SignIn: React.FC = () => {

     const emailRef = useRef<HTMLInputElement>(null);
     const passwordRef = useRef<HTMLInputElement>(null);

     const [loading, setLoading] = useState<boolean>(false);
     const [error, setError] = useState<string>('');

     const history = useHistory();

     const { signin } = useAuth();

     const handleSubmit: ((event: React.FormEvent<HTMLFormElement>) => void) = async (e) => {
          e.preventDefault();
          let password = passwordRef.current?.value;
          let email = emailRef.current?.value;
          if (email === '' || password === '') {
               return setError("Enter all fields!");
          }
          try {
               setError("");
               setLoading(true);
               await signin(email, password);
               history.push("/");
          } catch {
               setError("Failed to create account, please try again!");
          }
          setLoading(false);
     }
     return (
          <>
               <div className="formContainer">

                    <h1 className="heading">
                         Welcome Back!
                    </h1>

                    <p className="sub">
                         Login to your account.
                    </p>

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

                         <button 
                              disabled={loading}
                              type="submit" 
                              className="signIn btn"
                         >
                              Sign In
                         </button>

                    </form>

                    <div className="footer">
                         <p className="foot">
                              New here? Create a new account <Link to="/signup">Click here!</Link>
                         </p>
                    </div>

               </div>

               <div className="googleLogin">
                    <svg xmlns="http://www.w3.org/2000/svg" className="gmailSVG" viewBox="0 0 48 48" width="48px" height="48px">
                         <path fill="#4caf50" d="M45,16.2l-5,2.75l-5,4.75L35,40h7c1.657,0,3-1.343,3-3V16.2z"/>
                         <path fill="#1e88e5" d="M3,16.2l3.614,1.71L13,23.7V40H6c-1.657,0-3-1.343-3-3V16.2z"/>
                         <polygon fill="#e53935" points="35,11.2 24,19.45 13,11.2 12,17 13,23.7 24,31.95 35,23.7 36,17"/>
                         <path fill="#c62828" d="M3,12.298V16.2l10,7.5V11.2L9.876,8.859C9.132,8.301,8.228,8,7.298,8h0C4.924,8,3,9.924,3,12.298z"/>
                         <path fill="#fbc02d" d="M45,12.298V16.2l-10,7.5V11.2l3.124-2.341C38.868,8.301,39.772,8,40.702,8h0 C43.076,8,45,9.924,45,12.298z"/>
                    </svg>
                    <p className="gmail">Login with Gmail</p>
               </div>
          </>
     );
}