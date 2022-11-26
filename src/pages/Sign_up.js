import React from 'react'
import * as FaIcons from 'react-icons/fa';

function Sign_up() {
    return (
        <div className="auth-wrapper">
            <div className="auth-content">
                <div className="auth-bg">
                    <span className="r"></span>
                    <span className="r s"></span>
                    <span className="r s"></span>
                    <span className="r"></span>
                </div>
                <div className="card">
                    <div className="card-body text-center">
                        <div className="mb-4">
                            <i className="feather icon-unlock auth-icon"></i>
                        </div>
                        <h3 className="mb-4">Sign Up</h3>
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Username" />
                        </div>
                        <div className="input-group mb-3">
                            <input type="email" className="form-control" placeholder="Email" />
                        </div>
                        <div className="input-group mb-4">
                            <input type="password" className="form-control" placeholder="password" />
                        </div>
                        <button className="btn btn-primary shadow-2 mb-4">Sign Up</button>

                        <p class="mb-0 text-muted">Allready have an account? <a href="./Login"> Log in</a></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sign_up

