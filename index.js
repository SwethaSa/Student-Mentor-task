
import express from "express";
import mentorsRouter from './routes/mentors.route.js';
import studentsRouter from './routes/students.route.js';
import assignRouter from './routes/assign.route.js';
import {MongoClient} from 'mongodb';
import * as dotenv from 'dotenv' 
dotenv.config();

const app = express();

const PORT = process.env.PORT;

const MONGO_URL = process.env.MONGO_URL;
    const client =  new MongoClient(MONGO_URL);
    await client.connect();
    console.log("Your MongoDB is connected😍👍");

    app.use(express.json());

app.get("/", function (request, response) {
  response.send("🙋‍♂️, 🌏 🎊✨🤩");
});

app.use("/mentors", mentorsRouter);
app.use("/students", studentsRouter);
app.use("/assign", assignRouter);




app.listen(PORT, () => console.log(`The server started in: ${PORT} ✨✨`));


export {client};

