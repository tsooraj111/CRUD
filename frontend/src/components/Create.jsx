import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Create.css'

function Create() {
    const [values,setValues]=useState({
        name:" ",
        phno:" ",
        email:" "
    })
    const navigate = useNavigate();//it is used navigate to certain path

    const handleSubmit =(e)=>{
        e.preventDefault();
        axios.post('http://localhost:8081/details',values)
        .then(res => {
            navigate('/')
        })
        .catch(err => console.log(err))
    }
  return (
    <div className="create">
      <form onSubmit={handleSubmit}>
        <h2>Add Student</h2>
        <div className="mb-3">
          <label className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            onChange={e => setValues({...values,name: e.target.value})}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">
            Phone Number
          </label>
          <input
            type="tel"
            className="form-control"
            onChange={e => setValues({...values,phno: e.target.value})}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            onChange={e => setValues({...values,email: e.target.value})}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Create;
