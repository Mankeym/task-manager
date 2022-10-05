import React from 'react';
import './Loader.sass'
const Loader = () => {
    return (
        <div className={'loader'}>
            <div className="loader-ring">
                <div className={'loader-ring__item'}></div>
                <div className={'loader-ring__item'}></div>
                <div className={'loader-ring__item'}></div>
                <div className={'loader-ring__item'}></div>
            </div>
        </div>
    );
};

export default Loader;
