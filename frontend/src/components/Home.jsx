import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Home.css'

export default function home() {
    const [data,setData]=useState([])
    useEffect(()=>{
        axios.get('http://localhost:8081')
        .then(res => setData(res.data))
        .catch(err => console.log(err))
    },[])
    const handleDelete=(slno)=>{
      axios.delete('http://localhost:8081/delete/'+slno)
      .then(res=>{
        location.reload();
      })
    }
  return (
    <div className='home'>
        <div className="h1">Student List
            <Link to="/create" className="btn btn-info">Create</Link>
        </div>
      <table className="table table-hover">
        <thead>
            <tr>
                <th>Slno</th>
                <th>Name</th>
                <th>Phone No.</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {data.map((d,i)=>{
                return <tr key={i}>
                    <td>{d.slno}</td>
                    <td>{d.name}</td>
                    <td>{d.phno}</td>
                    <td>
                    <Link to={`/read/${d.slno}`} className="btn btn-warning">Read</Link>
                    <Link to={`/update/${d.slno}`} className="btn btn-success">Update</Link>
                    <button onClick={()=>handleDelete(d.slno)} className="btn btn-danger">Delete</button>
                    </td>
                </tr>
            })}
        </tbody>
      </table>
    </div>
  )
}
