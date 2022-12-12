import React from 'react'

const ScoreCard = ({score, resetQuiz, catMatch, qIndex}) => {
    return (
        <div className='container result display-block border-2 w-2/5 py-20 bg-gray-50 rounded'>
            <h3 className='text-4xl font-bold'>Result page</h3>
            <h4 className='text-1xl font-bold pt-4'>Category: {catMatch[qIndex].category}</h4>
            <p className='text-2xl py-4'>Score: {score} / {catMatch.length}</p>
            <button onClick={resetQuiz} className="btn restart-btn btn-style">Reset Quiz</button>
        </div>
    );
};

export default ScoreCard;