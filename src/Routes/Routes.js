import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Dhome from '../Dashboard/Components/Dhome/Dhome';
import Dsliders from '../Dashboard/Components/Dsliders/Dsliders';
import DError from '../Dashboard/Share/DError';
import Dheader from '../Dashboard/Share/Dheader';
import Error from '../Error/Error';
import Home from '../UI/Components/Home/Home';
import Main from '../UI/Components/Main';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '*',
                element: <Error />
            }

        ]
    },
    {
        path: '/dashboard',
        element: <Dheader />,
        children: [
            {
                path: '/dashboard',
                element: <Dhome />
            },
            {
                path: '/dashboard/sliders',
                element: <Dsliders />
            },
            {
                path: '*',
                element: <DError />
            }
        ]
    }
])
export default router;