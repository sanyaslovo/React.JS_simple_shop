import React from 'react';
import Header from "../../components/Header/Header";
import Auth from "../../components/Forms/Auth/Auth";
import Registration from "../../components/Forms/Registration/Registration";

import './SignInPage.scss'

const SignInPage = () => {


    return (
        <>
            <Header/>
            <div className="sign-in">
                <Auth />
                <Registration />
            </div>

        </>
    )
}

export default SignInPage
