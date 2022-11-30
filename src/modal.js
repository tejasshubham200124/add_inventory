import React, { useState } from "react";
import { Modal } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";

function ModalComponent({ item }) {

  const [showModal, setShowModal] = useState(false);

  console.log(item)
  return (
    <div key={item.userid}>
      <i style={{ margin: 'auto', color: '#2c8e95', cursor: 'pointer',fontSize: '20px' }} className="fas fa-edit" onClick={() => {
        setShowModal(true);
      }}></i>

      <Modal onHide={() => setShowModal(false)} show={showModal}>
        <h1>Edit</h1>
        <div>
          <div className="row">
            <div className="col-sm-12"><label>Name</label><input className="form-control" type="text" name="username" value={item.name} /></div>
            <div className="col-sm-12"><label>Contact</label><input type="text" className="form-control" name="Contact" value={item.contact} /></div>
            <div className="col-sm-12"><label>Email</label><input type="email" className="form-control" name="email" value={item.email} /></div>


          </div>
          {/* <hr /> */}
          <div className="user_action_buttons">
            <button className="btn btn-success">Update</button>
            <button style={{ margin: '10px' }} className="btn btn-danger" onClick={() => setShowModal(false)}>
              Close
            </button>
          </div>

        </div>

      </Modal>



    </div>
  );
}

export default ModalComponent;
