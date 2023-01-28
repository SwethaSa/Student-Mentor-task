import { client } from '../index.js';


export async function getAllMentors() {
    return await client.db("mentortask").collection("mentors").find({}).toArray();
}
export async function createMentors(data) {
    return await client.db("mentortask").collection("mentors").insertMany(data);
}

export async function assignedStudents(mentorName) {
    return await client.db("mentortask").collection("students").find({});
}
