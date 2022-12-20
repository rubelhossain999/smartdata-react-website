import React from 'react';

const Register = () => {
    return (
        <div className="login-popup" id="register-popup">
            <div className="login-popup-wrapper">
                <form className="login-popup__form">
                    <h3 className="login-popup__title">Register!</h3>
                    <p className="login-popup__desc">Connect, organize and get things done to keep your IT business safe.</p>
                    <div className="form-group mb-20">
                        <i className="icon-mail input-icon"></i>
                        <input type="text" className="form-control" placeholder="Email" />
                    </div>
                    <div className="form-group mb-20">
                        <i className="icon-lock input-icon"></i>
                        <input type="password" className="form-control" placeholder="********" />
                    </div>
                    <div className="d-flex align-items-center justify-content-between mb-20">
                        <div className="custom-control custom-checkbox d-flex align-items-center">
                            <input type="checkbox" className="custom-control-input" id="customCheck2" />
                            <label className="custom-control-label" for="customCheck2">I read & agree to <a href="/">Terms &
                                Conditions</a></label>
                        </div>
                    </div>
                    <button type="submit" className="btn btn__primary btn__block btn__xl">Register</button>
                </form>
                <div className="d-flex justify-content-center align-items-center mt-20">
                    <span className="color-white fz-14 font-weight-bold">Have An Account?</span>
                    <button id="go-login" className="go-login fz-14 font-weight-bold">
                        <span>Login Here</span><i className="icon-arrow-right"></i>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Register;