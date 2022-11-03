import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './shared/Footer'
import Header from './shared/Header'

const Main = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default Main