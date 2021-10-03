import React, { useState } from "react";

const CreateProject = () => {
  const [ inputs, setInputs] = useState({
    title: "",
    content: "",
  });

  const { title, content } = inputs

  const handleChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs)
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="white">
        <h5 className="grey-text text-darken-3">Sign In</h5>
        <div className="input-field">
          <label htmlFor="title">Title</label>
          <input type="text" name="title" onChange={handleChange} />
        </div>

        <div className="input-field">
          <label htmlFor="conent">Content</label>
          <input type="text" name="conent" onChange={handleChange} />
        </div>

        <div className="input-field">
          <button className="btn pink lighten-1 z-depth-0">Create Project</button>
        </div>
      </form>
    </div>
  );
};

export default CreateProject;
