import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import swal from "sweetalert";

const Edit = () => {
  const [input, setInput] = useState({
    name: "",
    age: "",
    skill: "",
    location: "",
    photo: "",
  });
  const { id } = useParams();
  const navigate = useNavigate();

  // handle input change
  const handleInputChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  // handle devs form
  const handleDevsForm = (e) => {
    e.preventDefault();
    axios.patch(`http://localhost:5050/developers/${id}`, input);
    navigate("/");
  };

  useEffect(() => {
    axios.get(`http://localhost:5050/developers/${id}`).then((res) => {
      setInput(res.data);
    });
  }, []);

  return (
    <>
      <div className="home my-5">
        <div className="container my-5">
          <div className="row">
            <div className="col">
              <h2 className="text-center">Edit User</h2>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-5">
              <Link to="/" className="btn btn-primary mb-4">
                Go back
              </Link>
              <div className="card shadow">
                <div className="card-body">
                  <form onSubmit={handleDevsForm}>
                    <div className="my-2">
                      <label htmlFor="">Name</label>
                      <input
                        type="text"
                        name="name"
                        value={input.name}
                        onChange={handleInputChange}
                        className="form-control"
                      />
                    </div>
                    <div className="my-2">
                      <label htmlFor="">Age</label>
                      <input
                        type="text"
                        name="age"
                        value={input.age}
                        onChange={handleInputChange}
                        className="form-control"
                      />
                    </div>
                    <div className="my-2">
                      <label htmlFor="">Skill</label>
                      <input
                        type="text"
                        name="skill"
                        value={input.skill}
                        onChange={handleInputChange}
                        className="form-control"
                      />
                    </div>
                    <div className="my-2">
                      <label htmlFor="">Location</label>
                      <input
                        type="text"
                        name="location"
                        value={input.location}
                        onChange={handleInputChange}
                        className="form-control"
                      />
                    </div>
                    <div className="my-2">
                      <label htmlFor="">Photo</label>
                      <input
                        type="text"
                        name="photo"
                        value={input.photo}
                        onChange={handleInputChange}
                        className="form-control"
                      />
                    </div>
                    <div className="my-2">
                      <button className="btn btn-primary" type="submit">
                        Update
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Edit;
