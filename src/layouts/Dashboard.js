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
                        <Outlet />
                    </div>
                </div>
                {/* 
                    <main>
                        <div className="grid mb-4 mt-4 pb-10 px-8 mx-4 rounded-3xl bg-gray-100 border-4 border-primary">
                        </div>
                    </main>
                </div> */}
            </div>
        </div>
    )
}

export default Dashboard