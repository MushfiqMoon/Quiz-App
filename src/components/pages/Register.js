import React, { useContext, useState } from 'react'
import toast from 'react-hot-toast';
import { FaGoogle, FaFacebookF } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const Register = () => {
    // const [error, setError] = useState(null)

    const { createUser, updateUserInfo } = useContext(AuthContext)

    const handleSubmit = event => {
        event.preventDefault()
        const form = event.target
        const name = form.name.value
        const email = form.email.value
        const photoUrl = form.photoUrl.value
        const password = form.password.value

        createUser(email, password)
            .then((result) => {
                const user = result.user;

                handleUpdateUserProfile(name, photoUrl);
                toast.success('Login Successful');
                form.reset()
            })
            .catch((error) => {
                const errorMessage = error.message;
                toast.error(errorMessage);
            });


        
    }

    // updating the profile of a user 

    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }

        updateUserInfo(profile)
            .then(() => { })
            .catch((error) => {
                const errorMessage = error.message;
                toast.error(errorMessage);

            });
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
                                <p className="text-lg mb-0 mr-4">Register with Email and Password</p>
                            </div>

                            <div
                                className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5"
                            >
                                <p className="text-center font-semibold mx-4 mb-0">Or</p>
                            </div>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-6">
                                    <input
                                        type="text"
                                        className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        name='name'
                                        placeholder="Your Name"
                                    />
                                </div>

                                <div className="mb-6">
                                    <input
                                        type="text"
                                        className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        name='photoUrl'
                                        placeholder="Photo URL"
                                    />
                                </div>

                                <div className="mb-6">
                                    <input
                                        type="text"
                                        className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        name='email'
                                        placeholder="Email address"
                                    />
                                </div>

                                <div className="mb-6">
                                    <input
                                        type="password"
                                        className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
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
                                        Register
                                    </button>
                                    <p className="text-sm font-semibold mt-2 pt-1 mb-0">
                                        Already have an account?
                                        <Link
                                            to='/login'
                                            className="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out"
                                        > Sign In</Link>
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

export default Register;