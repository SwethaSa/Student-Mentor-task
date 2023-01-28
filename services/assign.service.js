import { client } from '../index.js';

export function assignMentor(students, mentorName) {
    students.forEach(async (student) => {
        await client.db("mentortask").collection("students").updateOne(
            { id: student.id },
            { $set: { mentor: mentorName } }
        );
    });
}
export async function getStudents(studentNames) {
    return await client.db("mentortask").collection("students").find({ id: { $in: studentNames } }).toArray();
}
export async function getMentor(mentorName) {
    return await client.db("mentortask").collection("mentors").findOne({ name: mentorName });
}

export function createAssign(data) {
    return client.db("mentortask").collection("assign").insertOne(data);
}

export function getAssignedStudents(mentorName) {
    return client.db("mentortask").collection("students").find({ mentor: mentorName }).toArray();
}