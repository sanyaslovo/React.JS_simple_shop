import React from "react";
import { GoogleLogin } from 'react-google-login';
import './Auth.scss'


const Auth = () => {
    const responseGoogle = (response) => {
        console.log(response);
    }
    return (
        <div className="auth">
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>
            <form>
                <div className="form-input">
                    <input name="email" type="email" required="" className="input" defaultValue="" />
                    <label>email</label>
                </div>
                <div className="form-input">
                    <input name="password" type="password" required="" className="input" defaultValue="" />
                    <label>password</label>
                </div>
                <div className="auth-btn">
                    <button type="submit" className="submit"> Sign in</button>
                    <GoogleLogin
                        className="google-btn"
                        clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
                        buttonText="SIGN IN WITH GOOGLE"
                        render={renderProps => (<button className="google-btn" onClick={renderProps.onClick} disabled={renderProps.disabled}>SIGN IN WITH GOOGLE</button>
                        )}
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                        cookiePolicy={'single_host_origin'}
                    />
                </div>
            </form>
        </div>
    )
}

export default Auth
