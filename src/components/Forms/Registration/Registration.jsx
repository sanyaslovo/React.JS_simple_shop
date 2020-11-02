import React from "react";
import './Registration.scss'

const Registration = () => {
    return (
        <div className="registration">
            <h2>I do not have a account</h2>
            <span>Sign up with your email and password</span>
            <form>
                <div className="form-input">
                    <input name="displayName" type="text" required="" className="input" defaultValue="" />
                    <label>Display Name</label>
                </div>
                <div className="form-input">
                    <input name="email" type="email" required="" className="input" defaultValue="" />
                    <label>Email</label>
                </div>
                <div className="form-input">
                    <input name="password" type="password" required="" className="input" defaultValue="" />
                    <label>Password</label>
                </div>
                <div className="form-input">
                    <input name="confirmPassword" type="password" required="" className="input" defaultValue="" />
                    <label>Confirm Password</label>
                </div>
                <div className="registration-btn">
                    <button type="submit" className="submit"> Sign up</button>
                </div>
            </form>
        </div>
    )
}

export default Registration
