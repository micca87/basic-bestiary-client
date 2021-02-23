import React from 'react';

function SignUp() {
    return (
        <div>
            <form>
                <label for="name">Enter your email:</label>
                <input type="email" name="email" required></input>
                <label for="password">Enter password:</label>
                <input type="password" name="password" required></input>
            </form>
        </div>
    )
}

export default SignUp;