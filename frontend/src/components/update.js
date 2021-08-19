import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useLocation } from "react-router";
import { update } from "../task/actions/task";

function Update(props) {
  const [formData, setFormData] = React.useState({
    id: props.id,
    name: "",
  });
  const { name } = formData;

  const handleSubmit = (e) => {
    e.preventDefault();

    update(props.id, name);
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
          value={props.name}
          onChange={(e) => handleChange(e)}
        />
        <button type="submit">update</button>
      </form>
    </div>
  );
}
export default connect(null, { update })(Update);
