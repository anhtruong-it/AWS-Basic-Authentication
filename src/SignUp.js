import React from "react";
import Button from "./Button";
import { styles } from "./Form";

function SignUp({ signUp, updateFormState }) {
    return (
        <div style={styles.container}>
            <input
                name="username"
                onChange={e => { e.persist(); updateFormState(e) }}
                style={styles.input}
                placeholder="username"
            />
            <input
                name="password"
                type="password"
                onChange={e => { e.persist(); updateFormState(e) }}
                style={styles.input}
                placeholder="pasword"
            />
            <input
                name="email"
                type="email"
                onChange={e => { e.persist(); updateFormState(e) }}
                style={styles.input}
                placeholder="email"
            />
            <Button onClick={signUp} title="Sign Up" />
        </div>
    )
}

export default SignUp