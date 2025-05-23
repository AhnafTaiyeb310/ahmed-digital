import React from 'react';
import { Outlet } from 'react-router';
import NavBar from '../components/NavBar';
import ScrollSmootherProvider from '../ScrollSmoother';

function Root() {
    return (
        <div>
            <NavBar />
            <ScrollSmootherProvider>
                <div id="detail">
                    <Outlet />
                </div>
            </ScrollSmootherProvider>
        </div>
    );
}

export default Root;