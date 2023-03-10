const dotenv = require("dotenv");
const { MongoClient } = require("mongodb");

dotenv.config();
const uri = process.env.MONGO_URI;
const client = new MongoClient(uri);

async function listDatabases(client) {
  const databasesList = await client.db().admin().listDatabases();
  databasesList.databases.forEach(db => {
    console.log(`- ${db.name}`);
  });
}

const getUser = async (req, res) => {
  try {
    await client.connect();
    const result = await client.db("Exams").collection("Exams").find(
      { patientId: req.params.patientId }
    ).toArray();
    if (result.length === 0) {
      return res.status(404).json({
        success: false,
        message: `No patient found with the Patient ID: ${req.params.patientId}`
      });
    }
    return res.status(200).json({
      success: true,
      message: result
    });
  } catch (e) {
    console.log(e);
    return res.status(500).json({
      success: false,
      message: "An error occurred while retrieving the patient data."
    });
  } finally {
    client.close();
  }
}

module.exports = {
  getUser
};
