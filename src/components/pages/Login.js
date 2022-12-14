import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react'
import { FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';


function Login() {

    const [error, setError] = useState(null)
    const navigate = useNavigate()

    const { providerLogin, signInUser } = useContext(AuthContext)

    const googleProvider = new GoogleAuthProvider();


    const handleGoogleLogin = () => {

        providerLogin(googleProvider)
            .then((result) => {
                const user = result.user;

            })
            .catch((error) => {
                console.error(error)

            });

        navigate('/')
    }

    const handleSubmit = event => {
        event.preventDefault()

        const form = event.target
        const email = form.email.value
        const password = form.password.value

        signInUser(email, password)
            .then((result) => {

                const user = result.user;
                // console.log(user)

                // ...
            })
            .catch((error) => { setError(error.message); });

        form.reset()
        navigate('/')

    }



    return (
        <section className="container mx-auto">
            <div className="px-6 text-gray-800 my-20">
                <div
                    className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap g-6">
                    <div
                        className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0">
                        <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                            className="w-full"
                            alt="Sample image"
                        />
                    </div>
                    <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
                        <div>
                            <div className="flex flex-row items-center justify-center lg:justify-start">
                                <p className="text-lg mb-0 mr-4">Sign in with</p>

                                <button onClick={handleGoogleLogin} className='inline-block p-3 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mx-1'>
                                    <FaGoogle />
                                </button>

                            </div>

                            <div
                                className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5"
                            >
                                <p className="text-center font-semibold mx-4 mb-0">Or</p>
                            </div>
                            <p className='text-error'>{error}</p>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-6">
                                    <input
                                        type="text"
                                        className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        id="exampleFormControlInput1"
                                        name='email'
                                        placeholder="Email address"
                                    />
                                </div>

                                <div className="mb-6">
                                    <input
                                        type="password"
                                        className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        id="exampleFormControlInput2"
                                        name='password'
                                        placeholder="Password"
                                    />
                                </div>

                                <div className="flex justify-between items-center mb-6">
                                    <div className="form-group form-check">
                                        <input
                                            type="checkbox"
                                            className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                            id="exampleCheck2"
                                        />
                                        <label className="form-check-label inline-block text-gray-800" htmlFor="exampleCheck2"
                                        >I Agree</label>
                                    </div>
                                    <a href="#!" className="text-gray-800">Terms and Condition</a>
                                </div>

                                <div className="text-center lg:text-left">
                                    <button
                                        type="submit"
                                        className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                                    >
                                        Login
                                    </button>
                                    <p className="text-sm font-semibold mt-2 pt-1 mb-0">
                                        Don't have an account?
                                        <Link
                                            to='/register'
                                            className="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out"
                                        > Register</Link>
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Login