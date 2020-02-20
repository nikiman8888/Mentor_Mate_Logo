import React from 'react';
import './LogoRow.css';


function LogoRow({ row }) {

    return (
        <p key={row}>{row}</p>
    )
}


export default LogoRow;