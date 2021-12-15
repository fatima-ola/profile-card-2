import React from 'react';
import '../index.css';
import CardHeader from './CardHeader';
import CardBody from './CardBody';

const Card = () => {
    return (
        <div className="card">    
            <div className="wrapper">
                <CardHeader />
                <CardBody />
            </div>
        </div>
    )
}

export default Card
