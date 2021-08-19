import React, { useEffect } from "react";

import { connect } from "react-redux";
import { create, retrieve } from "../task/actions/task";
const Create = ({ create, retrieve }) => {
  const [formData, setFormData] = React.useState({
    name: "",
  });
  const { name } = formData;

  const handleSubmit = (e) => {
    e.preventDefault();
    create(name);
    retrieve();
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <form action="" method="post" onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => handleChange(e)}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};
export default connect(null, { create, retrieve })(Create);
