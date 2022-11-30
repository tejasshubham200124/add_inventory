import React ,{ useState} from 'react';
import user from '../App';

function Create_vendor() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [contact, setContact] = useState("");
    const [address, setAddress] = useState("");
    const [message, setMessage] = useState("");


    return (
        <div className="pcoded-main-container">
            <div className="pcoded-wrapper">
                <div className="pcoded-content">
                    <div className="pcoded-inner-content">
                        <div className="main-body">
                            <div className="page-wrapper">
                                <div className="row">
                                    <div className="col-sm-12">
                                        <form>

                                            <div className="card">
                                                <div className="card-header">
                                                    <h5> Create Vendor </h5>
                                                </div>
                                                <div className="card-body">
                                                    <div className="form-group">
                                                        <label className="form-label">Name</label>
                                                        <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} />
                                                    </div>
                                                    <div className="form-group">
                                                        <label className="form-label">Email</label>
                                                        <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)}/>
                                                    </div>
                                                    <div className="form-group">
                                                        <label className="form-label" >Contact</label>
                                                        <input type="text" className="form-control" value={contact} onChange={(e) => setContact(e.target.value)} />
                                                    </div>
                                                    <div className="form-group">
                                                        <label className="form-label">Address</label>
                                                        <input type="text" className="form-control" placeholder="" value={address} onChange={(e) => setAddress(e.target.value)} />
                                                    </div>
                                                </div>
                                                <div className="card-footer">
                                                    <button className="btn btn-primary me-2">Submit</button>
                                                </div>
                                                <div className="message">{message ? <p>{message}</p> : null}</div>

                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >

    );
}

export default Create_vendor;
