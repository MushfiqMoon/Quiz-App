import React from 'react'
import sendData from '../../utility/sendData'


const CreateQuestions = () => {

    const handleSubmit = e => {
        e.preventDefault()
        const form = e.target
        const question = form.quizQuestions.value
        const correctAnswer = form.correctAnswer.value
        const optionOne = form.optionOne.value
        const optionTwo = form.optionTwo.value
        const optionThree = form.optionThree.value
        const optionFour = form.optionFour.value

        const options = [optionOne, optionTwo, optionThree, optionFour]
        const newQuestion = { question, correctAnswer, options }
        console.log(newQuestion)

        // sending the data to backend
        const url = 'http://localhost:5000/quiz/question'
        sendData(url, newQuestion)
    }

    return (
        <>
            <div className="py-5 px-10 bg-gray-50 rounded dark:bg-gray-800">
                <div className='my-10'>
                    <h3 className='text-3xl font-bold'>Create Quiz</h3>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="relative z-0 mb-6 w-full group">
                        <label htmlFor="quiz-questions" className='badge badge-primary text-white mt-2'>Question</label>
                        <input type="text" name="quizQuestions" id="quiz-questions" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="" />
                    </div>
                    <div className="flex flex-row gap-x-10">
                        <div className="relative z-0 mb-6 w-full group basis-2/3">
                            <label htmlFor="correct-answer" className="badge badge-secondary text-white mt-2">Correct Answer</label>
                            <input type="text" name="correctAnswer" id="correct-answer" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="" />
                        </div>

                        <div className="relative z-0 mb-6 w-full group basis-1/3">
                            <input type="text" name="correct-answer" id="correct-answer" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="" />
                            <label htmlFor="correct-answer" className="badge badge-accent text-white mt-2">Correct Answer</label>
                        </div>
                    </div>

                    <div className="grid gap-x-10 gap-y-5 grid-cols-2">
                        <div className="relative z-0 mb-6 w-full group">
                            <label htmlFor="option-one" className="badge badge-secondary text-white mt-2">Option One</label>
                            <input type="text" name="optionOne" id="option-one" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="" />
                        </div>
                        <div className="relative z-0 mb-6 w-full group">
                            <label htmlFor="option-two" className="badge badge-secondary text-white mt-2">Option Two</label>
                            <input type="text" name="optionTwo" id="option-two" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="" />
                        </div>
                    </div>
                    <div className="grid gap-x-10 gap-y-5 grid-cols-2">
                        <div className="relative z-0 mb-6 w-full group">
                            <label htmlFor="option-three" className="badge badge-secondary text-white mt-2">Option Three</label>
                            <input type="text" name="optionThree" id="option-three" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="" />
                        </div>
                        <div className="relative z-0 mb-6 w-full group">
                            <label htmlFor="option-four" className="badge badge-secondary text-white mt-2">Option Four</label>
                            <input type="text" name="optionFour" id="option-four" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="" />
                        </div>

                    </div>
                    <button type="submit" className="text-white bg-primary hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                </form>
            </div>
        </>
    )
}

export default CreateQuestions