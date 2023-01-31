import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import Modal from "../../components/Modal/Modal";
import "./Home.scss";

const Home = () => {
  const [developers, setDevelopers] = useState([]);
  const [modalSingleShow, setModalSingleShow] = useState(false);

  const navigate = useNavigate();

  // handle delete
  const handleDevsDelete = (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        axios.delete(`http://localhost:5050/developers/${id}`).then((res) => {
          setDevelopers(developers.filter((data) => data.id !== id));
        });
        swal("Poof! Your imaginary file has been deleted!", {
          icon: "success",
        });
      } else {
        swal("Your imaginary file is safe!");
      }
    });
  };

  useEffect(() => {
    axios
      .get("http://localhost:5050/developers?_sort=id&_order=desc")
      .then((res) => {
        setDevelopers(res.data);
      });
  }, [setDevelopers]);

  return (
    <>
      <div className="home my-5">
        <div className="container my-5">
          <div className="row">
            <div className="col">
              <h2 className="text-center">Our Developers</h2>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-10">
              <Link to="/create" className="btn btn-primary mb-4">
                Add new developer
              </Link>
              <div className="card shadow">
                <div className="card-body">
                  <table className="table table-striped table-border">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Skill</th>
                        <th>Location</th>
                        <th>Photo</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {developers.map((devs, index) => (
                        <tr key={index} className="align-middle">
                          <td>{index + 1}</td>
                          <td>{devs.name}</td>
                          <td>{devs.age}</td>
                          <td>{devs.skill}</td>
                          <td>{devs.location}</td>
                          <td>
                            <img
                              className="table-photo"
                              src={devs.photo}
                              alt=""
                            />
                          </td>
                          <td>
                            {modalSingleShow && (
                              <Modal
                                title="Information"
                                hide={setModalSingleShow}
                              >
                                <div className="container">
                                  <div className="row">
                                    <div className="col-md-6 h-100">
                                      <img
                                        className="single-photo"
                                        src={devs.photo}
                                        alt=""
                                      />
                                    </div>
                                    <div className="col-md-6">
                                      <h2>{devs.name}</h2>
                                      <hr />
                                      <p>Age : {devs.age}</p>
                                      <p>Skill : {devs.skill}</p>
                                      <p>Location : {devs.location}</p>
                                    </div>
                                  </div>
                                </div>
                              </Modal>
                            )}
                            <button
                              onClick={() => setModalSingleShow(true)}
                              className="btn btn-info"
                            >
                              <i class="bx bx-show"></i>
                            </button>

                            <Link
                              to={`/edit/${devs.id}`}
                              className="btn btn-warning mx-1 "
                            >
                              <i class="bx bx-edit"></i>
                            </Link>
                            <button
                              className="btn btn-danger"
                              onClick={() => handleDevsDelete(devs.id)}
                            >
                              <i class="bx bx-trash"></i>
                            </button>
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
    </>
  );
};

export default Home;
