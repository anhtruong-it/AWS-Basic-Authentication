import React, { useEffect } from "react";
import { Auth } from 'aws-amplify';
import { useNavigate } from 'react-router-dom';

const protectedRoute = (Comp, route = '/profile') => (props) => {
    const navigate = useNavigate();
    async function checkAuthState() {
        try {
            await Auth.currentAuthenticatedUser()
        } catch (err) {
            navigate(route);
        }
    }
    useEffect(() => {
        checkAuthState()
    }, [])
    return <Comp {...props} />
}

export default protectedRoute


