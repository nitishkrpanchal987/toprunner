const express = require('express');
const router = new express.Router();
const student = require('../models/students')

// we need to define the router
router.get("/thapa", (req, res)=>{
    res.send("hello guys"); 
})

// create a new students
router.post('/students', async(req, res)=>{
    // console.log(req.body);
    
    // user.save().then(()=>{
    //     res.status(201).send(user)
    // }).catch((err)=>{
    //     
    // })
    try{
        const user = new student(req.body);
        await user.save();
        res.status(201).send(user)
    }catch(err){
        res.status(400).send(err);
    }
    // res.send('hello from the other side');
})
// get data or read data

router.get('/students', async(req, res)=>{
    try {
        const studentsData = await student.find();
        res.status(200).send(studentsData);
    } catch (error) {
        res.status(400).send(error);
    }
})

router.get('/students/:id', async(req, res)=>{
    try {
        const _id = req.params.id;
        const studentData = await student.findById(_id);
        if(!studentData)
            res.status(404).send();
        else
            res.send(studentData);
    } catch (error) {
        res.status(500).send(error);
    }
})

// app.get('/students/:email', async(req, res)=>{
//     try {
//         const email = req.params.email;
//         const studentData = await student.findById(email);
//         if(!studentData)
//             res.status(404).send();
//         else
//             res.send(studentData);
//     } catch (error) {
//         res.status(500).send(error);
//     }
// })

//update the students with id

router.patch('/students/:id', async (req, res)=>{
    try {
        const _id = req.params.id;
        const updateStudent = await student.findByIdAndUpdate(_id, req.body,{new: true});
        console.log(updateStudent);
        res.status(200).send(updateStudent);
    } catch (error) {
        res.status(400).send(error);
    }
})

//delete the student data

router.delete('/students/:id', async (req, res)=>{
    try {
        const _id = req.params.id;
        const deleteStudent = await student.findByIdAndDelete(_id);
        if(!deleteStudent)
            res.status(404).send();
        else
            res.send(deleteStudent);
    } catch (error) {
        res.status(500).send(error);
    }
})

module.exports = router;