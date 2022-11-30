import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import ModalComponent from "../modal";






const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


function Users() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  const [open, setOpen] = React.useState(false);

  const [recordForEdit, setRecordForEdit] = React.useState(false);
  const handleClose = () => setOpen(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalData, setModalData] = useState(null);


  // const handleOpen = items => {
  //   setOpen(true);
  //   setRecordForEdit(items);
  //   // console.log(items);

  // }







  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    fetch("https://sarmicrosystems.in/react_inventory/get_users.php")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])



  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <>
      <div className="pcoded-main-container">
        {/* <h2 className='center'> Users </h2> */}
        <div className="pcoded-wrapper">
          <div className="pcoded-content">
            <div className="pcoded-inner-content">
              <div className="main-body">
                <div className="page-wrapper">
                  <div className="row">
                    <div className="col-sm-12">
                      <div className='card'>
                        <div className='card-block'>
                          <table className="table table-hover">
                            <thead>
                              <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Contact</th>
                                <th>Email</th>
                                <th>Actions</th>
                              </tr>
                            </thead>
                            <tbody>
                              {items.map((item, index) => (
                                <tr key={index + 1}>
                                  <td scope="row">{index + 1}</td>
                                  <td>{item.name}</td>
                                  <td>{item.contact}</td>
                                  <td>{item.email}</td>
                                  <td style={{display:'flex'}}>
                                  <ModalComponent item={item} /> &nbsp;&nbsp; | &nbsp;&nbsp; <div><i style={{margin:'auto',color:'red',fontSize: '20px'}} className="fa-solid fa-trash"></i></div>
                                  </td>
                                </tr>
                              ))}

                            </tbody>
                          </table>

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
   
      </>
    );
  }
}

export default Users;







