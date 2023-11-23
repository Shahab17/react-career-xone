import { createContext } from "react";
import PropTypes from 'prop-types';



export const AuthContext = createContext(null)


const AuthProvider = ({children}) => {

    const googleSignIn = ()=>{
        console.log('hello from auth')
    }

    const authInfo = {
        googleSignIn
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes={
    children: PropTypes.node,
}

export default AuthProvider;