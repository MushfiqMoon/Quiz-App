import React, { useContext } from 'react'
import toast from 'react-hot-toast'
import { Link, NavLink } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthProvider'

export default function Header() {

    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
            .then(() => {
                // Sign-out successful.
                toast.success('Sign-out successful.');
            })
            .catch((error) => {
                console.error(error);
            });

    }


    return (
        <div className="navbar bg-primary text-white">
            <div className="container mx-auto">
                <div className="flex-1">
                    <Link to="/" className="btn btn-ghost normal-case text-xl">SJ-Quiz</Link>
                </div>
                <div className="flex">
                    <ul className="menu menu-horizontal p-0">
                        <li><NavLink to='/dashbord'>Dashboard</NavLink></li>
                        <li><NavLink to='/'>Home</NavLink></li>
                        <li><NavLink to='/catagories'>Category</NavLink></li>
                       
                        {
                            user ? <li><a >{user?.displayName ? user?.displayName : 'anonymous'} </a></li> : <></>
                        }
                    </ul>
                    <div className="dropdown dropdown-end">


                        {
                            user ?
                                <>
                                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                        <div className="w-10 rounded-full">
                                            {user?.photoURL ? <img src={user?.photoURL} /> : <img src="https://placeimg.com/80/80/people" />}
                                        </div>
                                    </label>
                                    <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52 text-black">
                                        <li>
                                            <a className="justify-between">
                                                Profile
                                                <span className="badge">New</span>
                                            </a>
                                        </li>
                                        <li><a>Settings</a></li>
                                        <li><a onClick={handleLogOut}>Logout</a></li>
                                    </ul>
                                </>
                                :
                                <Link className="btn" to='/login'>Log in</Link>
                        }



                    </div>
                </div>

            </div>
        </div>
    )
}



