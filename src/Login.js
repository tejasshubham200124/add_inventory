import React, { useState } from 'react';
import axios from 'axios';
import { setUserSession } from './Utils/Common';

function Login(props) {
    const [loading, setLoading] = useState(false);
    const username = useFormInput('');
    const password = useFormInput('');
    const [error, setError] = useState(null);

    // handle button click of login form
    const handleLogin = () => {
        setError(null);
        setLoading(true);
        axios.post('https://sarmicrosystems.in/react_inventory/login.php?username=' + username.value + '&password=' + password.value,
            { username: username.value, password: password.value }).
            then(response => {
                setLoading(false);
                if(response.data.userid>0){
                    setUserSession(
                        response.data.token, 
                        response.data.userid,
                        response.data.full_name
                        );
                    props.history.push('/dashboard');
                }else if(response.data == 0){
                        alert(' Invalid Credentials !');
                }

            }).catch(error => {
                setLoading(false);
                if (error.response.status === 401) setError(error.response.data.message);
                else setError("Something went wrong. Please try again later.");
            });
    }

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
                        <h3 className="mb-4">Login</h3>
                        <div className="input-group mb-3">
                            <input type="text" {...username} className="form-control" autoComplete="new-password" placeholder='Username'/>
                        </div>
                        <div className="input-group mb-4">
                            <input type="password" {...password} className="form-control" autoComplete="new-password" placeholder='Password' />
                        </div>
                        {error && <><small style={{ color: 'red' }}>{error}</small><br /></>}<br />
                        <input type="button" className="btn btn-primary shadow-2 mb-4" value={loading ? 'Loading...' : 'Login'} onClick={handleLogin} disabled={loading} /><br />
                    </div>
                </div>
            </div>
        </div>





        // <div>
        //   Login<br /><br />
        //   <div>
        //     Username<br />
        //     <input type="text" {...username} autoComplete="new-password" />
        //   </div>
        //   <div style={{ marginTop: 10 }}>
        //     Password<br />
        //     <input type="password" {...password} autoComplete="new-password" />
        //   </div>
        //   {error && <><small style={{ color: 'red' }}>{error}</small><br /></>}<br />
        //   <input type="button" value={loading ? 'Loading...' : 'Login'} onClick={handleLogin} disabled={loading} /><br />
        // </div>
    );
}

const useFormInput = initialValue => {
    const [value, setValue] = useState(initialValue);

    const handleChange = e => {
        setValue(e.target.value);
    }
    return {
        value,
        onChange: handleChange
    }
}

export default Login;