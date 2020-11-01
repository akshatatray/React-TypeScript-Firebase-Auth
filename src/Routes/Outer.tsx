import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext';

interface OuterProps {
     component: any,
     path: string,
     exact: any,
}

const Outer: React.FC<OuterProps> = ({ component: Component, path, exact,}) => {
     const { currentUser } = useAuth();

     return (
          <Route
               { ...path }
               render={props => {
                    return currentUser ? <Redirect to="/home" /> : <Component { ...props } />
               }}
          ></Route>
     );
}

export default Outer;