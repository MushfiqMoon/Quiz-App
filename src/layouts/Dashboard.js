import React from 'react'
import Sidebar from './shared/Sidebar'
import { Outlet } from 'react-router-dom'

const Dashboard = () => {
    return (
        <div>

            <div className="flex h-screen">
                <Sidebar />
                <div className="flex flex-col flex-1 w-full overflow-y-auto">

                    <div className='py-5 px-10'>
                        <div className="py-5 px-10 bg-gray-50 rounded">
                            <Outlet />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard