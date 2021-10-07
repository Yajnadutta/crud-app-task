import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function EmployeeDetail() {
  const [search, setSearch] = useState("");
  const [record, setRecord] = useState([]);

  const [user, setUser] = useState({
    fname: "",
    lname: "",
    phone: "",
  });

  //  Object Destructuring
  const { fname, lname,  phone } = user;
  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  // On Page load display all records
  const loadProductDetail = async () => {
    var response = fetch("http://localhost:5000/api/v1/employee")
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        setRecord(myJson);
      });
  };
  useEffect(() => {
    loadProductDetail();
  }, []);

  // Insert Product Records
  const submitEmployeeRecord = async (e) => {
    e.preventDefault();
    e.target.reset();
    await axios.post("http://localhost:5000/api/v1/employee", user);
    alert("Data Inserted");

    loadProductDetail();
  };

  // Search Records here
  const searchRecords = () => {
    alert(search);
    axios
      .get(`http://localhost:5000/api/v1/employee/searchRecord/${search}`)
      .then((response) => {
        setRecord(response.data);
      });
  };

  // Delete  Record
  const deleteRecord = (productId) => {
    axios
      .delete(`http://localhost:5000/api/v1/employee/${productId}`)
      .then((result) => {
        loadProductDetail();
      })
      .catch(() => {
        alert("Error in the Code");
      });
  };

  return (
    <section>
    
      <div class="container">
        <h4 className="mb-3 text-center mt-4">CRUD Operation</h4>
        <div class="row mt-3">
          <div class="col-sm-4">
            <div
              className="box p-3 mb-3 mt-5"
              style={{ border: "1px solid #d0d0d0" }}
            >
              <form onSubmit={submitEmployeeRecord}>
                <h5 className="mb-3 ">Insert Product Details</h5>
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control  mb-4"
                    name="fname"
                    value={fname}
                    onChange={(e) => onInputChange(e)}
                    placeholder="Enter Product Name"
                    required
                  />
                </div>

                <div class="form-group">
                  <input
                    type="text"
                    class="form-control  mb-4"
                    name="lname"
                    value={lname}
                    onChange={(e) => onInputChange(e)}
                    placeholder="Enter Product Price"
                    required=""
                  />
                </div>
               
                <button type="submit" class="btn btn-primary btn-block mt-4">
                  Insert Record
                </button>
              </form>
            </div>
          </div>
          <div class="col-sm-8">
            <h5 class="text-center  ml-4 mt-4  mb-5">View Records</h5>
            <div class="input-group mb-4 mt-3">
              <div class="form-outline">
                <input
                  type="text"
                  id="form1"
                  onChange={(e) => setSearch(e.target.value)}
                  class="form-control"
                  placeholder="Search Products Here"
                  style={{ backgroundColor: "#ececec" }}
                />
              </div>
              <button
                type="button"
                onClick={searchRecords}
                class="btn btn-success"
              >
                Search
              </button>
            </div>
            <table class="table table-hover  table-striped table-bordered ml-4 ">
              <thead>
                <tr>
                  <th>Product Name</th>
                  <th>Product Cost</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {record.map((name) => (
                  <tr>
                    <td>{name.first_name}</td>
                    <td>{name.last_name}</td>
                    <td>
                      <a
                        className="text-danger mr-2"
                        onClick={() => {
                          const confirmBox = window.confirm(
                            "Do you really want to delete " + name.first_name
                          );
                          if (confirmBox === true) {
                            deleteRecord(name.id);
                          }
                        }}
                      >
                        {"  "}
                        Delete
                        {"  "}
                          
                      </a>

                      <Link
                        class=" mr-2"
                        to={`/EditEmployee/editID/${name.id}`}
                      >
                        Edit
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EmployeeDetail;
