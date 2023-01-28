import { client } from '../index.js';

export async function getAllStudents() {
    return await client.db("mentortask").collection("students").find({}).toArray();
}
export async function createStudents(data) {
    return await client.db("mentortask").collection("students").insertMany(data);
}
