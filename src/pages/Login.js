import React, { useState } from 'react'
import * as FaIcons from 'react-icons/fa';

function Login() {


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    let handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let res = await fetch("https://sarmicrosystems.in/react_inventory/login.php?email=" + email + "&password=" + password, {
                method: "POST",
                body: JSON.stringify({
                    'email': email,
                    'password': password,
                }),
            });
            let resJson = await res.json();
            console.log(resJson);
            if (resJson === 1) {
                setEmail("");
                setPassword("");
                setMessage("User created successfully");
            } else {
                setMessage("Some error occured");
            }
        }
        catch (err) {
            console.log(err);
        }
    };



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
                            <input type="email" className="form-control" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                        </div>
                        <div className="input-group mb-4">
                            <input type="password" className="form-control" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                        </div>
                        <button className="btn btn-primary shadow-2 mb-4" onClick={handleSubmit}>Login</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login


{/* <html lang="en"><head>
<title>Datta Able - Signin</title>


<!--[if lt IE 10]>
		<script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
		<script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
		<![endif]-->

<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0, minimal-ui">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="description" content="">
<meta name="keywords" content="">
<meta name="author" content="CodedThemes">

<link rel="icon" href="../assets/images/favicon.ico" type="image/x-icon">

<link rel="stylesheet" href="../assets/fonts/fontawesome/css/fontawesome-all.min.css">

<link rel="stylesheet" href="../assets/css/plugins/animate.min.css">

<link rel="stylesheet" href="../assets/css/style.css">
</head>
<body style="">


<script src="../assets/js/plugins/popper.min.js"></script><script src="../assets/js/plugins/bootstrap.min.js"></script>


</body></html> */}