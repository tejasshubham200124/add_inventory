import React, { useEffect, useState } from 'react'


export default function Add_material() {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    const model_div = "<input type='text' name='model[]' className='form-control' />";
    
    let handleCopy = async (e) => {
        e.preventDefault();
        console.log(model_div);
    }

    useEffect(() => {
        fetch("https://sarmicrosystems.in/react_inventory/get_vendor.php")
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItems(result);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])

    return (
        <div className="pcoded-main-container">
            <h2 className='center'> Add Material </h2>
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
                                                    <h5>Add Material</h5>
                                                </div>
                                                <div className='card-block'>
                                                    <div className="form-group">
                                                        <label className="form-label">Vendor</label>
                                                        <select className='form-control' required>
                                                            <option>Select</option>
                                                            {items.map((item, index) => (
                                                                <option value={item.id}>{item.name}</option>
                                                            ))}
                                                        </select>
                                                    </div>
                                                    <div className="form-group">
                                                        <label className="form-label">Material Name</label>
                                                        <input type="text" className='form-control' />
                                                    </div>

                                                    <div className='card highlight'>
                                                        <div className='card-block'>

                                                            <div className="form-group model">
                                                                <label className="form-label">Model No</label>
                                                                <input type="text" name='model[]' className='form-control' />

                                                            </div>
                                                            <i className="fa-solid fa-plus add_success" onClick={handleCopy}></i>
                                                            <i className="fa-solid fa-minus remove_danger"></i>


                                                        </div>

                                                    </div>


                                                </div>


                                                <div className="card-footer">
                                                    <button className="btn btn-primary me-2">Submit</button>
                                                </div>
                                                {/* <div className="message">{message ? <p>{message}</p> : null}</div> */}

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
    )
}
