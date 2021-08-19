import React, { useEffect, useState } from "react";

import { connect } from "react-redux";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { create, delTask, retrieve, update } from "../task/actions/task";

const List = ({ retrieve, tasks, delTask, update, create }) => {
  const [put, setPut] = useState(false);
  const [show, setShow] = useState(false);
  const [formData, setFormData] = React.useState({
    name: "",
  });
  const { name } = formData;

  const handleSubmit = (e, id) => {
    e.preventDefault();
    update(id, name);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const del = (id) => {
    delTask(id);
  };
  useEffect(() => {
    retrieve();
  }, [handleSubmit, del, create]);

  const checkPut = (id) => {
    return (
      <form action="" method="post" onSubmit={(e) => handleSubmit(e, id)}>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => handleChange(e)}
        />
        <button type="submit">update</button>
      </form>
    );
  };
  const handleClick = (id) => {
    if (id === id) {
      setPut(!put);
    }
  };
  return (
    <div>
      <ul>
        {tasks.map((item) => {
          return (
            <div key={item.id}>
              <li onClick={() => handleClick(item.id)}>
                {item.name}
                <button onClick={() => del(item.id)}>X</button>
                <br />
              </li>
              {put ? checkPut(item.id) : null}
            </div>
          );
        })}
      </ul>
    </div>
  );
};
const mapStateToProps = (state) => ({
  tasks: state.task.tasks,
});
export default connect(mapStateToProps, { retrieve, create, update, delTask })(
  List
);
