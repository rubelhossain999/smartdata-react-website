import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Dhome from '../../../Dashboard/Components/Dhome/Dhome';
import Dashboard from '../../../Dashboard/Dashboard';
import Home from '../Home/Home';
import Main from '../Main';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            }
        ]
    },
    {
        path: '/dashboard',
        element: <Dashboard />,
        children: [
            {
                path: '/dashboard',
                element: <Dhome />
            }
        ]
    }
])
export default router;