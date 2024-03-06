import React from 'react';

export default function LocationInfo(props) {
    return (
        <div className="location--info">

            {props.foundInCanada ? <img src="../../assets/canada-flag-icon.png" className="location--icon" alt="Canada Flag" /> : ""}

            {props.foundInCanada && <p className="gray">Found in Canada</p>}

        </div>
    );
};