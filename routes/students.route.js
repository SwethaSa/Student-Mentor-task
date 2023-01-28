


        import express from 'express';
import { createStudents, getAllStudents } from '../services/students.service.js';
        const router = express.Router();

router.post("/", async function (request, response) {
    
        const data = request.body;
        console.log(data);
        const students = await createStudents(data);
        response.send(students);
    
    });

        router.get("/", async function (request, response) {
        
            const data = request.params;
            console.log(data);
           const students = await getAllStudents();
            response.send(students);
            students ? response.send(students):response.status(404).send({Error:"Sorry😕 No Such Data"})
       
        });

        export default router;


