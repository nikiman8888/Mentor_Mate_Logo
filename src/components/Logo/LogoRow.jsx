import React from 'react';

function LogoRow({ row }) {
    
    return (
        <p key={row}>{row}</p>
    )
}

export default LogoRow;