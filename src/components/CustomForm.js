import React, { useState } from "react";

const CustomForm = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState("");

  const onChangeHandler = (e) => {
    setEmail(e.target.value);
    alert(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    email &&
      email.indexOf("@") > -1 &&
      onValidated({
        EMAIL: email,
      });
  };

  return (
    <form className="mc__form" onSubmit={(e) => handleSubmit(e)}>
      <input
        className="form-control"
        onChangeHandler={onChangeHandler}
        type="email"
        placeholder="your@email.com"
        isRequired
      />

      <input
        className="btn btn-primary btn-block mt-3"
        type="submit"
        formValues={[email]}
      />
    </form>
  );
};

export default CustomForm;
