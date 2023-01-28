
        import express from 'express';
import { createMentors, getAllMentors, assignedStudents } from '../services/mentors.service.js';
import {  assignMentor } from '../services/assign.service.js';

        const router = express.Router();

router.post("/", async function (request, response) {
    
        const data = request.body;
        console.log(data);
        const mentors = await createMentors(data);
        response.send(mentors);
    
    });

    router.get("/", async function (request, response) {
        
        const data = request.params;
        console.log(data);
       const mentors = await getAllMentors();
        response.send(mentors);
        mentors ? response.send(mentors):response.status(404).send({Error:"Sorry😕 No Such Data"})
   
    });

    router.get("/:name", async function (request, response) {
        try {
            const mentorName = request.params.name;
            console.log(mentorName);
            response.send(assignMentor);
        } catch (err) {
            console.log(err);
            return err.message;
        }
    });


    export default router;




