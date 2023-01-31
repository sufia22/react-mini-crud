const Alert = ({ msg, type, hide }) => {
  return (
    <p className={`alert alert-${type} d-flex justify-content-between`}>
      {msg}
      <button
        className="btn-close"
        onClick={() => hide({ status: false, msg: "", type: "danger" })}
      ></button>
    </p>
  );
};

export default Alert;
