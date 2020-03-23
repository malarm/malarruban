import React from 'react';

const Banner = ({ title, children }) => {
    return (
        <div className="banner">
            <h3><i>{title}</i></h3>
            {children}
        </div>
    )
}
export default Banner;