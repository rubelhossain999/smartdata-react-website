import React from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router';

const AddSlider = () => {
    const nagigator = useNavigate();

    const handleAddSliderdata = event => {
        event.preventDefault();
        const form = event.target;

        const title = form.title.value;
        const subtitle = form.subtitle.value;
        const file = form.file.value;
        const buttonone = form.buttonone.value;
        const buttontwo = form.buttontwo.value;

        const sliderData = {
            title,
            subtitle,
            file,
            buttonone,
            buttontwo
        }


        // Data Insert Data on the MongoDB
        fetch('http://localhost:5000/addsliders', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(sliderData)
        })
        .then( res => res.json())
        .then( data => {
            toast.success("Slider Added Succes!");
            nagigator('/dashboard/sliders');
            console.log(data);
        })
        .catch( error => console.log(error))
    }



    return (
        <div className='row'>
            <div className='col-md-6'>
                <div className="card shadow mb-4">
                    <div
                        className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                        <h6 className="m-0 text-dark">Add Your Home Page Slider.</h6>
                        <div className="dropdown no-arrow">

                        </div>
                    </div>
                    <div className="card-body">
                        <form onSubmit={handleAddSliderdata}>
                            <div className="form-group">
                                <h6>Title</h6>
                                <input type="text" name='title' className="form-control" id="title" placeholder="Slider Title" />
                            </div>
                            <div className="form-group">
                                <h6>Sub Title</h6>
                                <textarea type="text" rows="3" name='subtitle' className="form-control" id="subtitle" placeholder="Sub Slider Title" />
                            </div>
                            <h6>Slider Image</h6>
                            <div className="input-group mb-3">
                                <input type="file" name='file' className="form-control pt-3" id="inputGroupFile02" />
                                <label className="input-group-text" for="inputGroupFile02">Upload</label>
                            </div>
                            <div className="input-group">
                                <span className="input-group-text">Slider BTN Name</span>
                                <input type="text" aria-label="First name" name='buttonone' className="form-control" placeholder='1st Btn Name' />
                                <input type="text" aria-label="Last name" name='buttontwo' className="form-control" placeholder='2nd Btn Name' />
                            </div>
                            <button className='btn btn-primary mt-20'>Add Slider</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddSlider;