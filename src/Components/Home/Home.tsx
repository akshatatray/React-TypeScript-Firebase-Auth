import React from 'react'
import './Home.css';

import { useAuth } from '../../Context/AuthContext';
import { useHistory } from 'react-router-dom';

export const Home: React.FC = () => {

     const history = useHistory();
     const { signout } = useAuth();

     const logout = () => {
          signout();
          history.push("/signin");
     }

     return (
          <div className="HomeContainer">
               <button className="btn signout" onClick={ logout }>
                    Sign Out
               </button>
          </div>
     );
}