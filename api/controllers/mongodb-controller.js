const dotenv = require("dotenv").config();
const { MongoClient } = require("mongodb");
const uri = process.env.MONGO_URI;
const client = new MongoClient(uri);


async function listDatabases(client) {

    const databasesList = await client.db().admin().listDatabases();

    databasesList.databases.forEach(db => {
        console.log(`- ${db.name}`);
    });

}

const createExam = async (req, res) => {
    await client.connect();
    try {
        const result = await client.db("exams").collection("exam").insertOne(req.body.exam);
        console.log(`New exam created with the following id: ${result.insertedId}`);
    } catch (e) {
        console.log(e);
        return res.status(400).json({
            success: false,
            message: `Failed to create `
        });
    } finally {
        client.close();
    }
    
    return res.status(200).json({
        success: true,
        message: `Created ${JSON.stringify(req.body.exam)}`
    });
}


const getByExam = async (req, res) => {
    await client.connect();
    let result = "";
    try {
        result = await client.db("exams").collection("exam").findOne(
            { examId: req.params.examid }
        );

        if(!result){
            return res.status(400).json({
                success: false,
                message: `No exam found with the examId: ${req.params.examid}`
            });
        }
    } catch (e) {
        console.log(e);
    } finally {
        client.close();
    }
    return res.status(200).json({
        success: true,
        message: result
    });
}

const updateExam = async (req, res) => { 
    await client.connect();
    let result = "";
    try {
        result = await client.db("exams").collection("exam").updateOne(req.body.exam, { $set: req.body.members });
    } catch (e) {
        return res.status(400).json({
            success: false,
            message: `Failed to update `
        });
    } finally {
        client.close();
    }
    return res.status(200).json({
        success: true,
        message: `Updated to: ${JSON.stringify(result)} \n ${result.matchedCount} document(s) matched the query criteria.\n${result.modifiedCount} document(s) were updated\n`
    });
}


const deleteExam = async (req, res) => {
    await client.connect()
    let result = "";
    try {
        result = await client.db("exams").collection("exam").deleteOne(req.params.exam);
    } catch (e) {
        return res.status(400).json({
            success: false,
            message: `Failed to delete `
        });
    } finally {
        client.close();
    }
    return res.status(200).json({
        success: true,
        message: `${result.deletedCount} document(s) was/were deleted\n`
    });
}


module.exports = {
    createExam,
    getByExam,
    updateExam,
    deleteExam
}