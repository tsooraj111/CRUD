import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'

function Read() {
    const {slno}=useParams();   
    const [student, setStudent]=useState([]);
    
    useEffect(()=>{
        axios.get('http://localhost:8081/read/'+slno)
        .then(res=>{
          console.log(res.data)
          setStudent(res.data[0])
        })
        .catch(err=>console.log(err))
    },[])

  return (
    <div className='home'>
      <h2>Student Details</h2>
      <h3>{student.name}</h3>
      <h3>{student.phno}</h3>
      <h3>{student.email}</h3>
      <Link to="/" className='btn btn-primary'>Back</Link>
    </div>
  )
}

export default Read
