import React from 'react'
import { FaHome, FaQuestionCircle, FaTags, FaUserAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    return (
        <>
            <aside className="w-64" aria-label="Sidebar">
                <div className="h-screen py-4 px-3 bg-gray-50 rounded dark:bg-gray-800">
                    <ul className="space-y-2">
                        <li>
                            <Link to="/dashbord" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                <FaHome />
                                <span className="ml-3">Dashboard</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                <FaUserAlt />
                                <span className="ml-3">Users</span>
                            </Link>
                        </li>
                        <li>
                            <Link to='/dashbord/add/category' className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                <FaTags />
                                <span className="ml-3">Category</span>
                            </Link>
                        </li>
                        <li>
                            <Link to='/dashbord/add/questions' className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                <FaQuestionCircle />
                                <span className="ml-3">Add Questions</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </aside>
        </>
    )
}

export default Sidebar
















