import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext';

interface InnerProps {
     component: any,
     path: string,
     exact: any,
}

const Inner: React.FC <InnerProps> = ({ component: Component, ...rest }) => {
     const { currentUser } = useAuth();

     return (
          <Route
               { ...rest }
               render={props => {
                    return currentUser ? <Component { ...props } /> : <Redirect to="/signin" />
               }}
          ></Route>
     );
}

export default Inner;