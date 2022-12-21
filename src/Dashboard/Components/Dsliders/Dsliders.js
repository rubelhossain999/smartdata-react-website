import React from 'react';
import { Link } from 'react-router-dom';

const Dsliders = () => {
    return (
        <div class="card shadow mb-4">
            <div
                class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                <h6 class="m-0 text-dark">All Sliders</h6>
                <div class="dropdown no-arrow">
                    <Link to='/dashboard/addslider'>
                        <button className='Dbtn-primary'>Add Slider</button>
                    </Link>
                </div>
            </div>
            <div class="card-body">
                hhh
            </div>
        </div>
    );
};

export default Dsliders;