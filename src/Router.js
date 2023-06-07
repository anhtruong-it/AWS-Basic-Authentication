import React, { useState, useEffect } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
//import '@aws-amplify/ui-react/styles.css';
import Nav from "./Nav";
import Public from "./Public";
import Protected from "./Protected";
import Profile from "./Profile";

const Router = () => {
    const [current, setCurrent] = useState('home')
    useEffect(() => {
        setRoute()
        window.addEventListener('hashchange', setRoute)
        return () => window.removeEventListener('hashchange', setRoute)
    }, [])
    function setRoute() {
        const location = window.location.href.split('/')
        const pathname = location[location.length - 1]
        setCurrent(pathname ? pathname : 'home')
        console.log("routet: ", location)
        console.log("routet: ", pathname)
        console.log("routet: ", current)
    }
    return (
        <HashRouter>
            <Nav current={current} />
            <Routes>
                <Route path="/" element={<Public />} />
                <Route path="/protected" element={<Protected />} />
                <Route path="/profile" element={<Profile />}/>
                <Route component={<Public />} />
            </Routes>
        </HashRouter>
    )
}

export default Router