import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ScoreCard from '../components/ScoreCard';

const Question = () => {
const [questions, setQuestions] = useState([]);
const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
const [score, setScore] = useState(0);
const [gameOver, setGameOver] = useState(false);

let param = useParams();
const cat = param.name

useEffect(() => {
  (async()=>{
    const questionResponse = await axios.get(`https://quiz-app-server-zeta.vercel.app/quiz/question`);
    setQuestions(questionResponse.data.data)
  })(); 
}, []);

const catMatch = questions.filter(question => question.category == cat)

const handleAnswerSelection = (answer) => {
    const currentQuestion = catMatch[currentQuestionIndex];
    console.log(currentQuestion);
    if (currentQuestion.correctAnswer === answer) {
        setScore(score + 1);
    }

    const isLastQuestion = currentQuestionIndex === catMatch.length - 1;
    if (isLastQuestion) {
        setGameOver(true);
        return;
    }

    setCurrentQuestionIndex(currentQuestionIndex + 1);
}

const resetQuiz = () => {
    setQuestions([])
    setCurrentQuestionIndex(0)
    setScore(0)
    setGameOver(false);
  }


return (
    <div className="flex justify-center items-start text-center w-50 h-screen my-10 rounded">
        {gameOver ? (
        <ScoreCard score={score} resetQuiz={resetQuiz} catMatch={catMatch} qIndex={currentQuestionIndex}/>
        ) : (
            catMatch.map((question, i) => {
                if (i === currentQuestionIndex) {
            return(
                <div key = {i} className="container mx-auto px-4 border-2 px-4 py-5 sm:grid sm:gap-4 sm:px-6 w-2/5">
                    <p>Question : {currentQuestionIndex + 1} / {catMatch.length}</p>
                    <h3 className="text-3xl font-bold">Q{currentQuestionIndex + 1} : {question.question}</h3>
                    <ul>
                        {question.options.map((answer, index) => (
                        <li className="text-lg hover:bg-[#057AFF] hover:text-[#fff] border-t border-gray-200 bg-gray-50 px-4 py-4 sm:grid sm:gap-4 sm:px-6" key={index} onClick={() => handleAnswerSelection(answer)}>
                            {answer}
                        </li>
                        ))}
                    </ul>
                </div>
                 )
            }})
        )}
    </div>
    );
};

export default Question;