// Import the dotenv module and configure it
const dotenv = require("dotenv").config();

// Import the MongoClient class from the mongodb module
const { MongoClient } = require("mongodb");

// Read the MongoDB connection URI from the environment variables
const uri = process.env.MONGO_URI;

// Create a new instance of the MongoClient class with the MongoDB connection URI
const client = new MongoClient(uri);

// Define an asynchronous function to list the databases in the MongoDB instance
async function listDatabases(client) {

    // Call the listDatabases method of the admin database and await the result
    const databasesList = await client.db().admin().listDatabases();

    // Loop over the databases in the result and log their names
    databasesList.databases.forEach(db => {
        console.log(`- ${db.name}`);
    });
}

// Define an asynchronous function to get all exams from the database
const getExams = async (req, res) => {
    try {
        // Connect to the MongoDB instance
        await client.connect();

        // Query the "Exams" collection and return the result as an array
        const result = await client.db("Exams").collection("Exams").find({}).toArray();

        // Return the array of exams in the response
        return res.status(200).json({ exams: result });
    } catch (e) {
        // Log any errors that occur and return an error response
        console.error(e);
        return res.status(500).json({ error: "Internal server error" });
    } finally {
        // Close the MongoDB connection
        client.close();
    }
};

// Define an asynchronous function to create a new exam in the database
const createExam = async (req, res) => {
    const exam = req.body;
    try {
        // Connect to the MongoDB instance
        await client.connect();

        // Insert the new exam document into the "Exams" collection
        const result = await client.db("Exams").collection("Exams").insertOne(exam);

        // Log a message indicating the ID of the new exam and return a success response
        console.log(`New exam created with the following id: ${result.insertedId}`);
        res.json({ message: 'Exam created successfully', examId: result.insertedId });
    } catch (e) {
        // Log any errors that occur and return an error response
        console.error(e);
        res.status(500).json({ message: 'Internal server error' });
    } finally {
        // Close the MongoDB connection
        client.close();
    }
};

// Define an asynchronous function to get a single exam by its examId
const getByExam = async (req, res) => {
    await client.connect();
    let result = "";
    try {
        // Query the "Exams" collection for a document with the specified examId
        result = await client.db("Exams").collection("Exams").findOne(
            { examId: req.params.examid }
        );

        // If no document was found, return an error response
        if(!result){
            return res.status(400).json({
                success: false,
                message: `No exam found with the examId: ${req.params.examid}`
            });
        }
    } catch (e) {
        console.log(e);
    } finally {
        // Close the MongoDB connection
        client.close();
    }

    // Return the found document as a success response
    return res.status(200).json({
        success: true,
        message: result
    });
}

// Define an asynchronous function to update an existing

const updateExam = async (req, res) => { 
    await client.connect(); // Connect to MongoDB
    try {
        const filter = { examId: req.params.exam }; // Specify the document to update using the exam ID from the request parameters
        const update = { $set: req.body }; // Define the update to be the entire request body
        const result = await client.db("Exams").collection("Exams").updateOne(filter, update); // Perform the update and get the result
        if(result.matchedCount === 0) { // If no documents were matched
            return res.status(404).json({ success: false, message: `Exam with examId ${req.params.exam} not found` }); // Return a 404 Not Found status code
        }
        return res.status(200).json({
            success: true,
            message: `Updated to: ${JSON.stringify(result)} \n ${result.matchedCount} document(s) matched the query criteria.\n${result.modifiedCount} document(s) were updated\n`
        }); // Return a success message with the number of documents matched and modified
    } catch (e) {
        console.error(e);
        res.status(500).json({ success: false, message: 'Internal server error' }); // If an error occurs, return a 500 Internal Server Error status code
    } finally {
        client.close(); // Close the MongoDB connection
    }
};

// This function deletes a specific exam from the database based on the provided examId.
const deleteExam = async (req, res) => {
    await client.connect(); // Connect to the MongoDB server.
    let result = "";
    try {
      result = await client
        .db("Exams")
        .collection("Exams")
        .deleteOne({ examId: req.params.examid }); // Delete the exam with the given examId.
    } catch (e) {
      return res.status(400).json({
        success: false,
        message: `Failed to delete exam with examId: ${req.params.examid}`
      }); // If an error occurs, return a response with the error message.
    } finally {
      client.close(); // Close the MongoDB connection.
    }
    return res.status(200).json({
      success: true,
      message: `${result.deletedCount} document(s) was/were deleted.` // Return a response with the number of documents deleted.
    });
  };
  
  // Export the functions that will be used to interact with the database.
  module.exports = {
    createExam,
    getByExam,
    updateExam,
    deleteExam,
    getExams
  };
  