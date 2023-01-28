import express from 'express';
import { client } from '../index.js';
import { getMentor, getStudents, assignMentor, createAssign, getAssignedStudents} from '../services/assign.service.js';

const router = express.Router();

router.post("/", async function (request, response) {
    const data = request.body;
    createAssign(data)
        .then(result => {
            response.status(201).send(result);
        })
        .catch(err => {
            response.status(500).send({ message: "Failed to create assignment", error: err });
        });
});

router.put("/", async function (request, response) {
    try {

        const { studentNames, mentorName } = request.body;

        // Find the mentor by name
        const mentor = await getMentor(mentorName);
        if (!mentor) {
            response.status(404).send({ message: "Mentor not found." });
            return;
        }

        // Find the students by name
        const students = await getStudents(studentNames);
        if (students.length === 0) {
            response.status(404).send({ message: "Students not found." });
            return;
        }

        // Assign the students to the mentor
        await assignMentor(students, mentorName);

        response.send({ message: "Students assigned to mentor successfully." });
    } catch (err) {
        response.status(500).send({ message: "Failed to assign students to mentor", error: err });
    }
});

router.get("/:name/students", async function (request, response) {
    try {
        const mentorName = request.params.name;
        const students = await getAssignedStudents(mentorName);
        response.send(students);
    } catch (err) {
        response.status(500).send({ message: err.message });
    }
});


export default router;



