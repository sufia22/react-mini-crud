import { useState } from "react";
import swal from "sweetalert";
import Alert from "../../components/Alert/Alert";
import "./Contact.scss";

const Contact = () => {
  const [input, setInput] = useState({
    name: "",
    email: "",
    cell: "",
  });

  // alert state
  const [alert, setAlert] = useState({
    status: false,
    msg: "",
    type: "danger",
  });

  // handle input change
  const handleInputChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  // form submit
  const hamdleFormSubmit = (e) => {
    e.preventDefault();

    if (input.name === "" || input.email === "" || input.cell === "") {
      setAlert({
        status: true,
        msg: "All fields are required",
        type: "danger",
      });

      swal({
        title: "ohhh!",
        text: "All fields are required!",
        icon: "error",
        button: "Cancel",
      });
    } else {
      setInput({
        name: "",
        email: "",
        cell: "",
      });

      setAlert({
        status: true,
        msg: "Registration successfull",
        type: "success",
      });

      swal({
        title: "Good job!",
        text: "Registration successfull",
        icon: "success",
        button: "Cancel",
      });
    }
  };

  return (
    <div className="contact-area">
      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-md-5">
            <div className="card shadow">
              <div className="card-body">
                <h2>Register now</h2>
                {alert.status && (
                  <Alert msg={alert.msg} type={alert.type} hide={setAlert} />
                )}

                <hr />
                <form onSubmit={hamdleFormSubmit}>
                  <div className="my-3">
                    <label htmlFor="">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={input.name}
                      onChange={handleInputChange}
                      className="form-control"
                    />
                  </div>
                  <div className="my-3">
                    <label htmlFor="">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={input.email}
                      onChange={handleInputChange}
                      className="form-control"
                    />
                  </div>
                  <div className="my-3">
                    <label htmlFor="">Cell</label>
                    <input
                      type="text"
                      name="cell"
                      value={input.cell}
                      onChange={handleInputChange}
                      className="form-control"
                    />
                  </div>
                  <div className="my-3">
                    <button className="btn btn-primary" type="submit">
                      Register
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
