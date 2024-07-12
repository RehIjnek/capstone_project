import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { MongoClient, ObjectId } from 'mongodb';

dotenv.config();
const url = process.env.MONGO_DB_URL;
const dbName = process.env.MONGO_DB;
const projectsCollection = process.env.MONGO_DB_PROJECTS;

const app = express();
app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Middleware to parse JSON bodies
const PORT = 3000;

app.get('/api/projects', async (req, res) => {
    try {
        const client = await MongoClient.connect(url);
        const db = client.db(dbName);
        const collection = db.collection(projectsCollection);
        const projects = await collection.find({}).toArray();
        res.json(projects);
    } catch (err) {
        console.error("Error:", err);
        res.status(500).send("Hmmm, something smells... No projects for you! ☹");
    }
});

app.post('/api/projects', async (req, res) => {
    try {
        const project  = req.body;
        const client = await MongoClient.connect(url);
        const db = client.db(dbName);
        const collection = db.collection(projectsCollection);
        const result = await collection.insertOne(project);
        res.status(201).send(`{"_id":"${result.insertedId}"}`);
    } catch (err) {
        console.error('Error:', err);
        res.status(500).send('Hmm, something doesn\'t smell right... Error adding project');
    }
});

app.delete('/api/projects/:id', async (req, res) => {
    try {
        const id  = req.params.id;
        const client = await MongoClient.connect(url);
        const db = client.db(dbName);
        const collection = db.collection(projectsCollection);
        const result = await collection.deleteOne({ projId: parseInt(id) });
        if (result.deletedCount === 1) {
            res.status(200).send('Project deleted successfully');
        } else {
            res.status(404).send('Project not found');
        }
    } catch (err) {
        console.error('Error:', err);
        res.status(500).send('Hmm, something doesn\'t smell right... Error deleting sock');
    }
});

app.put('/api/projects/:id', async (req, res) => {
    try {
        const id  = req.params.id;
        const attributes = req.body;
        console.log('Updating project attributes for project with ID:', id);
        const client = await MongoClient.connect(url);
        const db = client.db(dbName);
        const collection = db.collection(projectsCollection);
        const result = await collection.updateOne({ projId: parseInt(id) }, { $set: attributes });
        res.status(200).send({
            status: 'success',
            data: attributes, 
            message: 'Project attributes updated successfully.'
        });
    } catch (err) {
        console.error('Error:', err);
        res.status(500).send('Hmm, something doesn\'t smell right... Error deleting project');
    }
});

app.get('/api/projects/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const client = await MongoClient.connect(url);
        const db = client.db(dbName);
        const collection = db.collection(projectsCollection);
        const projects = await collection.find({ projId: parseInt(id) }).toArray();
        res.json(projects[0]);
    } catch (err) {
        console.error("Error:", err);
        res.status(500).send("Hmmm, something smells... No projects for you! ☹");
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});