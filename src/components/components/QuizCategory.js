import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { FaTrashAlt } from 'react-icons/fa'
import sendData from '../../utility/sendData'

const QuizCategory = () => {

    const [quizCat, setquizCat] = useState([])

    const handleSubmit = e => {
        e.preventDefault()
        const form = e.target
        const name = form.quizCategory.value
        const image = form.quizCatImage.value


        const category = { name, image }

        console.log(category)

        // sending the data to backend

        fetch('https://quiz-app-server-zeta.vercel.app/quiz/category', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(category),
        })
            .then((res) => res.json())
            .then((data) => {
                const newCat = [...quizCat, category]
                setquizCat(newCat)
                if (data.sussess) {
                    return toast.success(data.massage);
                } else {
                    toast.error(data.massage);
                }
            })
    }

    useEffect(() => {
        fetch('https://quiz-app-server-zeta.vercel.app/quiz/category')
            .then(res => res.json())
            .then(data => setquizCat(data.data))


    }, [])

    // DELETE 
    const handleDelete = id => {
        // e.preventDefault()
        console.log(id)
        const res = quizCat.filter((data) => data._id !== id);
        setquizCat([...res]);

        fetch(`https://quiz-app-server-zeta.vercel.app/quiz/category/${id}`, {
            method: 'DELETE',
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.sussess) {
                    return toast.success(data.massage);

                } else {
                    toast.error(data.massage);
                }
            })
    }
    console.log(quizCat);
    return (
        <>
            <section>
                <div className='my-10'>
                    <h3 className='text-3xl font-bold'>Create Category</h3>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="flex flex-wrap">
                        <div className="relative z-0 mb-6 p-5 lg:w-1/2 md:w-1/2 w-full group">
                            <label htmlFor="quizCategory" className='badge badge-primary text-white mt-2'>Create </label>
                            <input type="text" name="quizCategory" id="quizCategory" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="" />
                        </div>
                        <div className="relative z-0 mb-6 p-5 lg:w-1/2 md:w-1/2 w-full group">
                            <label htmlFor="quizCatImage" className='badge badge-primary text-white mt-2'>Category Image Link </label>
                            <input type="text" name="quizCatImage" id="quizCatImage" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="" />
                        </div>
                    </div>
                    <button type="submit" className="text-white bg-primary hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add</button>

                </form>
            </section>


            <section>
                <div className='mb-10 mt-24'>
                    <h3 className='text-3xl font-bold'>Category List</h3>
                </div>
                <div className="text-gray-600 body-font">
                    <div className="container py-5 mx-auto">
                        <div className="flex flex-wrap m-2">
                            {
                                
                                quizCat?.map((cat, index) =>
                                    <div key={index} className="p-2 lg:w-1/2 md:w-1/2 w-full">
                                        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                            <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={cat?.image ? cat?.image : 'https://dummyimage.com/80x80'} />
                                            <div className="flex-grow">
                                                <h2 className="text-gray-900 title-font font-medium font-bold">{cat?.name}</h2>
                                            </div>
                                            <button onClick={() => handleDelete(cat._id)}><FaTrashAlt /></button>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default QuizCategory