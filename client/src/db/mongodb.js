const { MongoClient } = require('mongodb');

const exams = []; //Mock data goes here
const uri = "mongodb+srv://mmwaura:oQ37dOcQ6JojD11@techdive3.nyaudnt.mongodb.net/?retryWrites=true&w=majority"
const client = new MongoClient(uri);

async function main() {

    try {
        await client.connect();
        await listDatabases(client);

        /*
        await createExam(client, newExam);
        await deleteAll(client);
        await createExams(client, exams);
        await getByExam(client, exams[0]);
        await updateExam(client, { "patisentId": "COVID-19-AR-16424081" }, { "age": 20, "sex": "M" });
        */
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

async function listDatabases(client) {

    const databasesList = await client.db().admin().listDatabases();

    databasesList.databases.forEach(db => {
        console.log(`- ${db.name}`);
    });

}

async function createExam(client, exam) {
    const result = await client.db("exams").collection("exam").insertOne(exam);
    console.log(`New exam created with the following id: ${result.insertedId}`);
}

async function createExams(client, exams) {
    const result = await client.db("exams").collection("exam").insertMany(exams);
    console.log(`${result.insertedCount} new exams created with the following id(s):`);
    console.log(`${result.insertedIds}`);
}

async function getByExam(client, exam) {
    const result = await client.db("exams").collection("exam").findOne(
        {patientId: exam.patientId}
    );

    if(result) {
        console.log(`Found an exam in the collection with the patientId: '${result.patientId}'`);
    } else {
        console.log(`No exam found with the patientId: '${exam.patientId}'`);
    }
}

/*
    -   use find() to get many
    -   find returns a cursor
    -   use .limit() to set a limit of the returned exams. 
*/

async function updateExam(client, exam, members) {  // members: { <field> : <value>, ... }
    const result = await client.db("exams").collection("exam").updateOne(exam, { $set: members }); 
    console.log(`${result.matchedCount} document(s) matched the query criteria`);
    console.log(`${result.modifiedCount} document(s) were updated`);
}

/*
    -   use upsert to update an exam or instert if none exists
        by add a third parameter in updateOne of the form { upsert: true } 
*/


async function deleteExam(client, exam) {
    const result = await client.db("exams").collection("exam").deleteOne(exam);
    console.log(`${result.deletedCount} document(s) was/were deleted`);
}

async function deleteAll(client) {
    const result = await client.db("exams").collection("exam").deleteMany({});
    console.log(`${result.deletedCount}`)
}


main().catch(console.error)

export { listDatabases, createExam, createExams, getByExam, updateExam, deleteExam }