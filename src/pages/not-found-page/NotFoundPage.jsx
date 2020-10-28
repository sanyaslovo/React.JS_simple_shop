import React from "react";
import './NotFoundPage.scss';
import Button from "../../components/Button/Button";
const NotFoundPage = () =>  {
    return (
        <div className="not-found">
            <h1>404: Oops page not found.</h1>
            <img src="https://cdn.rawgit.com/ahmedhosna95/upload/1731955f/sad404.svg" alt="not-found"/>
            <Button link position="center" path="/" txt="Go to Home"/>
        </div>
    )
}
export default NotFoundPage
