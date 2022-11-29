import React, { useEffect, useState } from 'react';


function Venor() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    fetch("https://sarmicrosystems.in/react_inventory/get_vendor.php")
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
      <div className="pcoded-main-container">
        {/* <h2 className='center'> Vendors </h2> */}
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
                                <th>Vendor</th>
                                <th>Contact</th>
                                <th>Address</th>
                              </tr>
                            </thead>
                            <tbody>
                              {items.map((item, index) => (
                                <tr>
                                  <th scope="row">{index + 1}</th>
                                  <td>{item.name}</td>
                                  <td>{item.contact}</td>
                                  <td>{item.email}</td>
                                  <td>{item.address}</td>
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
    );
  }
}

export default Venor;







