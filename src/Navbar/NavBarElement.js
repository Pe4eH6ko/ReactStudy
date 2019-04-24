import React from 'react';

export default props => (
    <li className={props.liClass}>
        <a className={props.linkClass} href={props.href}>{props.text}</a>
    </li>
)