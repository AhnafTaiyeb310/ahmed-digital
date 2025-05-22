import React from 'react'
import NavBar from '../components/NavBar'
import { Outlet } from 'react-router'


function Root() {
    return (
        <div>
            <NavBar/>
            <div id='detail'>
                <Outlet/>
            </div>
        </div>
    )
}

export default Root
