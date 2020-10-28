import React from 'react';
import {Link} from "react-router-dom";
import './Button.scss'

const Button = ({link, path, txt }) => {
    return (
           link
           ?
           <Link className="btn" to={path}>{txt}</Link>
           :
           <a href={path} className="btn">{txt}</a>
    )
}

export default Button;
