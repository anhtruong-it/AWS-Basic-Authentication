import React, { useState, useEffect } from 'react'
import { Auth, Hub } from 'aws-amplify'
import { withAuthenticator } from '@aws-amplify/ui-react';
import Container from './Container';
import { Button } from 'antd';
import Form from './Form';

// function Profile({ signOut }) {
//     console.log("pf")
//     useEffect(() => {
//         checkUser()
//     }, [])
//     const [user, setUser] = useState({})
//     async function checkUser() {
//         try {
//             const data = await Auth.currentUserPoolUser()
//             const userInfo = { username: data.username, ...data.attributes, }
//             setUser(userInfo)
//         } catch (err) { console.log('error: ', err) }
//     }
//     return (
//         <Container>
//             <h1>Profile</h1>
//             <h2>Username: {user.username}</h2>
//             <h3>Email: {user.email}</h3>
//             <h4>Phone: {user.phone_number}</h4>
//             <button onClick={signOut}>Sign out</button>
//         </Container>
//     );
// }

function Profile() {
    useEffect(() => {
        checkUser()
        Hub.listen('auth', (data) => {
            const { payload } = data
            if (payload.event === 'signOut') {
                setUser(null)
            }
        })
    }, [])
    const [user, setUser] = useState(null)
    async function checkUser() {
        try {
            const data = await Auth.currentUserPoolUser()
            const userInfo = { username: data.username, ...data.attributes, }
            setUser(userInfo)
        } catch (err) {
            console.log("error", err)
        }
    }
    function signOut() {
        Auth.signOut()
            .catch(err => console.log("error signing out: ", err))
    }
    if (user) {
        return (
            <Container>
                <h1>Profile</h1>
                <h2>Username: {user.username}</h2>
                <h3>Email: {user.email}</h3>
                <h4>Phone: {user.phone_number}</h4>
                <Button onClick={signOut}>Sign Out</Button>
            </Container>
        );
    }
    return <Form setUser={setUser} />
}

export default Profile