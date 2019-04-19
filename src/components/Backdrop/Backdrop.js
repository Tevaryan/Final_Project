import React from 'react';

import './Backdrop.css';

const backdrop = (props) => (
    <div className="Backdrop" onClick={props.backdrop}></div>
);

export default backdrop;