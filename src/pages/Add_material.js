import React, { useEffect, useState } from 'react'


export default function Add_material() {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    const [vendor, setVendor] = useState(false);
    const [material, setMaterial] = useState('');
    const [model, setModel] = useState([{ model: "" }])

    const [message, setMessage] = useState("");

    const [items, setItems] = useState([]);

    let handleChange = (i, e) => {
        let newmodel = [...model];
        newmodel[i][e.target.name] = e.target.value;
        setModel(newmodel);
    }

    let addFormFields = () => {
        setModel([...model, { model: "" }])
    }

    let removeFormFields = (i) => {
        let newmodel = [...model];
        newmodel.splice(i, 1);
        setModel(newmodel)
    }
    let handleSubmit = async (e) => {
        e.preventDefault();
        var arr = [];
        for (var i = 0; i < model.length; i++) {
            arr.push(model[i].model);
        }
        try {
            let res = await fetch("https://sarmicrosystems.in/react_inventory/add_material.php?vendor=" + vendor + "&material=" + material + "&model=" + arr, {
                method: "POST",
                body: JSON.stringify({
                    'vendor': vendor,
                    'material': material,
                    'model': arr,
                }),
            });

            let resJson = await res.json();
            if (resJson === 1) {
                setVendor("");
                setMaterial("");
                setModel("");
                setMessage("Material Added successfully");
            } else {
                setMessage("Some error occured");
            }
        }
        catch (err) {
            console.log(err);
        }
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
                                        <div className="card">
                                            <div className="card-header">
                                                <h5>Add Material</h5>
                                            </div>
                                            <div className='card-block'>
                                                <div className="form-group">
                                                    <label className="form-label">Vendor</label>
                                                    <select name='vendor' className='form-control' value={vendor} onChange={(e) => setVendor(e.target.value)} required>
                                                        <option>Select</option>
                                                        {items.map((item, index) => (
                                                            <option key={item.id} value={item.id}>{item.name}</option>
                                                        ))}
                                                    </select>
                                                </div>
                                                <div className="form-group">
                                                    <label className="form-label">Material Name</label>
                                                    <input type="text" name='material' value={material} onChange={(e) => setMaterial(e.target.value)} className='form-control' />
                                                </div>

                                                <div className='card highlight'>
                                                    <div className='card-block'>

                                                        <div className="form-group model">
                                                            <label className="form-label">Model No</label>

                                                            {
                                                                model ? 
                                                                model.map((element, index) => (
                                                            <div className="form-inline" key={index}>
                                                                <input type="text" name="model" className='form-control' value={element.model || ""} onChange={e => handleChange(index, e)} />
                                                                {
                                                                    index
                                                                        ? <i className="fa-solid fa-minus remove_danger" onClick={() => removeFormFields(index)}></i>
                                                                        : null
                                                                }
                                                            </div>
                                                                ))  : null }
                                                        </div>
                                                        <i className="fa-solid fa-plus add_success" onClick={() => addFormFields()}></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card-footer">
                                                <button className="btn btn-primary me-2" onClick={handleSubmit}>Submit</button>
                                            </div>
                                            <div className="message">{message ? <p>{message}</p> : null}</div>
                                        </div>
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
