import React from "react";
import Container from "./Container";
import '@aws-amplify/ui-react/styles.css';
import protectedRoute from "./protectedRoute";


function Protected() {
    console.log("pro")
    return (
        <Container>
            <h1>Protected</h1>
        </Container>
    );
}

export default protectedRoute(Protected)