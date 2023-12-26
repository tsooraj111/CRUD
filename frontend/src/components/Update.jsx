import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate,useParams,Link } from "react-router-dom";
import './Create.css'

function Update() {
    const {slno}=useParams(); 
    // const [values,setValues]=useState([])
    const navigate = useNavigate();//it is used navigate to certain path

    
    useEffect(()=>{
      axios.get('http://localhost:8081/read/'+slno)
      .then(res=>{
        console.log(res.data[0])
        setValues({...values, name: res.data[0].name, phno: res.data[0].phno, email: res.data[0].email})
      })
      .catch(err=>console.log(err))
    },[])

    const [values,setValues]=useState({
      name:" ",
      phno:" ",
      email:" "
    })
    const handleUpdate =(e)=>{
        e.preventDefault();
        axios.put('http://localhost:8081/update/'+slno,values)
        .then(res => {
          console.log(res);
          navigate('/')
        })
        .catch(err => console.log(err))
    }
  return (
    <div className="create">
      <form onSubmit={handleUpdate}>
        <h2>Update Student</h2>
        <div className="mb-3">
          <label className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            onChange={e => setValues({...values,name: e.target.value})}
            value={values.name}
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
            value={values.phno}
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
            value={values.email}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Update
        </button>
        <Link to={'/'} className="btn btn-primary">Back</Link>
      </form>
    </div>
  );
}

export default Update;
