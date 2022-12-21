import React from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router';

const AddSlider = () => {
    const nagigator = useNavigate();
    const imgbbAPI = process.env.REACT_APP_ibbimage_KEY;

    const handleAddSliderdata = event => {
        event.preventDefault();
        const form = event.target;

        /// Image upload Process
        const image = form.image.files[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?expiration=600&key=${imgbbAPI}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    const imaData = {
                        image: imgData.data.url,
                        title: form.title.value,
                        subtitle: form.subtitle.value,
                        buttonone: form.buttonone.value,
                        buttontwo: form.buttontwo.value,
                    };

                    // Data Insert Data on the MongoDB
                    fetch('http://localhost:5000/addsliders', {
                        method: "POST",
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(imaData)
                    })
                        .then(res => res.json())
                        .then(data => {
                            toast.success("Slider Added Succes!");
                            nagigator('/dashboard/sliders');
                            console.log(data);
                        })
                        .catch(error => console.log(error))
                }
            })
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
                                <input type="text" name='title' className="form-control" id="title" placeholder="Slider Title" required />
                            </div>
                            <div className="form-group">
                                <h6>Sub Title</h6>
                                <textarea type="text" rows="3" name='subtitle' className="form-control" id="subtitle" placeholder="Sub Slider Title" required />
                            </div>
                            <h6>Slider Image</h6>
                            <div className="input-group mb-3">
                                <input type="file" name='image' className="form-control pt-3" id="inputGroupFile02" />
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