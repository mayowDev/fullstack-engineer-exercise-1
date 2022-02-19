import React from 'react';

const Card = ({data }) => {
    console.log('data', data)
    return (
        <div className={'card-box'}>
            {
                data.map(({designType, projectBudget, projectName, userEmail, projectTimeline}, idx)=> (
                    <div className={'card'} key={idx}>
                        <h2>Project Name: {projectName}</h2>
                        <p>Project Timeline: {projectTimeline}</p>
                        <p>User Email:{userEmail}</p>
                        <p>Design Type: {designType}</p>
                        <p>Project Budget: {projectBudget}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default Card;
