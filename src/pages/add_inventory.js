import React, { useState, useEffect } from "react";

import './inventory.css'
function Add_inventory() {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);
  const [vendor, setVendor] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
//   const [inputFields, setInputFields] = useState()
//   const removeInputFields = (index)=>{
//     const rows = [...inputFields];
//     rows.splice(index, 1);
//     setInputFields(rows);
// }
  const inputArr = [
    {
      type: "text",
      id: 1,
      value: ""
    }
  ];

  const [arr, setArr] = useState(inputArr);

  const addInput = () => {
    setArr(s => {
      const lastId = s[s.length - 1].id;
      return [
        ...s,
        {
          type: "text",
          value: ""
        }
      ];
    });
  };


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

  const handleChange = e => {
    e.preventDefault();

    const index = e.target.id;
    setArr(s => {
      const newArr = s.slice();
      newArr[index].value = e.target.value;

      return newArr;
    });
  };


  return (
    <div>
      <div className="pcoded-main-container">
        <div className="pcoded-wrapper">
          <div className="pcoded-content">
            <div className="pcoded-inner-content">
              <div className="main-body">
                <div className="page-wrapper">
                  <div className="row">
                  
                      <div className="card">
                     < div className="col-sm-12">
                      <div className="parent">
                        {/* <h4>
                          Add Inventory
                        </h4> */}

                        <table className='table'>
                          <tr>
                            <th className='th1'>Is sr no</th>
                            <th>Vendor Name</th>
                            <th>Material</th>
                            <th>Model No</th>
                            <th>Po no</th>
                            <th>Project name</th>
                            <th>Invoice No</th>
                            <th>Qty</th>
                          </tr>
                          <tr>
                            <td>
                              <input type="checkbox" className='cb' />
                            </td>
                            <td>
                              <select name='vendor' className='form-control' value={vendor} onChange={(e) => setVendor(e.target.value)} required>
                                <option>Select</option>
                                {items.map((item, index) => (
                                  <option key={item.id} value={item.id}>{item.name}</option>
                                ))}
                              </select>
                            </td>
                            <td><select className="form-select" aria-label="Default select example">
                              <option selected>Select</option>
                              <option value="1">One</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                            </select></td>
                            <td><select className="form-select" aria-label="Default select example">
                              <option selected>Select</option>
                              <option value="1">One</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                            </select></td>
                            <td> <input className="form-control" type="text" /></td>
                            <td>
                              <input className="form-control" type="text" />
                            </td>
                            <td>
                              <input className="form-control" type="text" />
                            </td>
                            <td>
                              <input className="form-control" type="text" />
                            </td>
                          </tr>
                        </table>
                       
                         <div className='table'>
                         <div className="pt-table">
                          <table className="ha">
                            <tr>
                              <th>
                                Serial Number
                              </th>
                            </tr>
                            <td>
                              <input className="form-control fa" type="text" />


                              {arr.map((item, i) => {
                                return (
                                  <input
                                    onChange={handleChange}
                                    value={item.value}
                                    id={i}
                                    type={item.type}
                                    size="80"
                                    className="form-control"
                                  />
                                );
                              })}
                            </td>

                          </table>
                        </div>
                        <div className="center">
                          <button type="button" className="btn btn-primary" onClick={addInput}>Add row</button>
                          {/* {(inputFields.length!==1) ? <button className="btn btn-outline-danger" onClick={removeInputFields}>Remove</button>:''} */}
                          <button type="button" className="btn btn-danger" onClick={addInput}>Delete row</button>
                          <button type="button" className="btn btn-success" onClick={addInput}>Submit</button>
                        </div>
                        </div>
                      </div>
                      
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )

}

export default Add_inventory;