const express = require('express');
const mysql = require('mysql')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())

const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    Password:'',
    database:'crud'
})

// app.get('/',(req,res)=>{
//     return res.json("backend")
// })

app.get('/',(req,res)=>{
    const sql="SELECT * from details";
    db.query(sql,(err,data)=>{
        if(err) return res.json(err);
        return res.json(data)
    })
})

app.post('/details',(req,res)=>{
    console.log(req.body);
    const sql="INSERT INTO `details` (`slno`, `name`, `phno`, `email`) VALUES ('NULL',?)";
    const values =[
        req.body.name,
        req.body.phno,
        req.body.email
    ]
    db.query(sql,[values],(err,result)=>{
        if(err) return res.json(err);
        return res.json(result)
    })
})

app.get('/read/:slno',(req,res)=>{
    const sql="SELECT * from details WHERE slno=?";
    const slno=req.params.slno;
    db.query(sql,[slno],(err,data)=>{
        if(err) return res.json(err);
        return res.json(data)
    })
})

app.put('/update/:slno',(req,res)=>{
    const sql="UPDATE `details` SET `name` =?, `phno` = ?, `email` = ? WHERE `slno` = ?";
    const slno=req.params.slno;
    db.query(sql,[req.body.name, req.body.phno, req.body.email,slno],(err,data)=>{
        if(err) return res.json(err);
        return res.json(data)
    })
})

app.delete('/delete/:slno',(req,res)=>{
    const sql="DELETE  from details WHERE slno=?";
    const slno=req.params.slno;
    db.query(sql,[slno],(err,data)=>{
        if(err) return res.json(err);
        return res.json(data)
    })
})



app.listen(8081, ()=>{console.log("listening...");})