const dotenv = require("dotenv");
const { MongoClient } = require("mongodb");
dotenv.config();
const uri = process.env.MONGO_URI;
const client = new MongoClient(uri);

async function listDatabases() {
    const databasesList = await client.db().admin().listDatabases();
    databasesList.databases.forEach(db => {
        console.log(`- ${db.name}`);
    });
}

// GET a single patient based on patiendId within the EXAMS collection
const getPatient = async (req, res) => {
    try {
        await client.connect();
        const result = await client.db("Exams").collection("Exams").find({patientId}).toArray();
        return res.status(200).json({ exams: result });
    } catch (e) {
        console.error(e);
        return res.status(500).json({ error: "Internal server error" });
    } finally {
        client.close();
    }
};

export default getPatient;
