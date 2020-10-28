import React from "react";
import { Link } from "react-router-dom";
import './Error404View.scss';

const Error404View = () => {
    return (
        <div className="error404">
            <h1>404: The page you are looking for isn’t here</h1>
            <img src="https://cdn.rawgit.com/ahmedhosna95/upload/1731955f/sad404.svg" alt="not found page"/>
            <Link to="/" className="btn">Go back home page</Link>
        </div>
    )
}

export default Error404View
