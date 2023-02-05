const { MongoClient } = require('mongodb');

const exams = [{ "_id": "61e83d679dc59e6e8e11a1cb", "patientId": "COVID-19-AR-16424081", "age": 37, "sex": "F", "zipCode": "720", "bmi": 56.46, "__v": 0, "examId": "Exam-2", "keyFindings": "significant worsening of airspace disease, now very extensive and patchy sparing only apices.", "brixiaScores": "1,2,3,4", "imageURL": "https://ohif-hack-diversity-covid.s3.amazonaws.com/covid-png/COVID-19-AR-16424082_XR_CHEST_AP_PORTABLE_2.png" }, { "_id": "61e83d679dc59e6e8e11a1c2", "patientId": "COVID-19-AR-16434381", "age": 44, "sex": "F", "zipCode": "721", "bmi": 64.6, "__v": 0, "examId": "Exam-2", "keyFindings": "significant worsening of airspace disease, now very extensive and patchy sparing only apices.", "brixiaScores": "1,2,3,4", "imageURL": "https://ohif-hack-diversity-covid.s3.amazonaws.com/covid-png/COVID-19-AR-16434381_XR_CHEST_AP_ONLY_1.png" }, { "_id": "61e83d679dc59e6e8e11a1d0", "patientId": "COVID-19-AR-16406502", "age": 88, "sex": "F", "zipCode": "721", "bmi": 34.9, "__v": 0, "examId": "Exam-1", "keyFindings": "Bilateral patchy airspace disease involving both mid and lower lung zones, left worse than the right.", "brixiaScores": "1,2,3,4", "imageURL": "https://ohif-hack-diversity-covid.s3.amazonaws.com/covid-png/COVID-19-AR-16406502_XR_CHEST_PA_AND_LATERAL_4.png" }, { "_id": "61e83d679dc59e6e8e11a1d1", "patientId": "COVID-19-AR-16406502", "age": 88, "sex": "F", "zipCode": "721", "bmi": 34.9, "__v": 0, "examId": "Exam-2", "keyFindings": "significant worsening of airspace disease, now very extensive and patchy sparing only apices.", "brixiaScores": "1,2,3,4", "imageURL": "https://ohif-hack-diversity-covid.s3.amazonaws.com/covid-png/COVID-19-AR-16406502_XR_CHEST_AP_ONLY_2.png" }, { "_id": "61e83d679dc59e6e8e11a1c5", "patientId": "COVID-19-AR-16439216", "age": 61, "sex": "F", "zipCode": "722", "bmi": 36, "__v": 0, "examId": "Exam-1", "keyFindings": "Bilateral patchy airspace disease involving both mid and lower lung zones, left worse than the right.", "brixiaScores": "1,2,3,4", "imageURL": "https://ohif-hack-diversity-covid.s3.amazonaws.com/covid-png/COVID-19-AR-16439216_XR_CHEST_AP_PORTABLE_3.png" }, { "_id": "61e83d679dc59e6e8e11a1ce", "patientId": "COVID-19-AR-16406504", "age": 39, "sex": "M", "zipCode": "722", "bmi": 33.5, "__v": 0, "examId": "Exam-2", "keyFindings": "significant worsening of airspace disease, now very extensive and patchy sparing only apices.", "brixiaScores": "1,2,3,4", "imageURL": "https://ohif-hack-diversity-covid.s3.amazonaws.com/covid-png/COVID-19-AR-16406504_XR_CHEST_AP_ONLY_1.png" }, { "_id": "61e83d679dc59e6e8e11a1c1", "patientId": "COVID-19-AR-16434381", "age": 44, "sex": "F", "zipCode": "721", "bmi": 64.6, "__v": 0, "examId": "Exam-1", "keyFindings": "Bilateral patchy airspace disease involving both mid and lower lung zones, left worse than the right.", "brixiaScores": "1,2,3,4", "imageURL": "https://ohif-hack-diversity-covid.s3.amazonaws.com/covid-png/COVID-19-AR-16434381_XR_CHEST_AP_PORTABLE_2.png" }, { "_id": "61e83d679dc59e6e8e11a1c0", "patientId": "COVID-19-AR-16434409", "age": 51, "sex": "M", "zipCode": "722", "bmi": 37.7, "__v": 0, "examId": "Exam-1", "keyFindings": "Bilateral patchy airspace disease involving both mid and lower lung zones, left worse than the right.", "brixiaScores": "1,2,3,4", "imageURL": "https://ohif-hack-diversity-covid.s3.amazonaws.com/covid-png/COVID-19-AR-16434409_XR_CHEST_AP_PORTABLE_1.png" }, { "_id": "61e83d679dc59e6e8e11a1c7", "patientId": "COVID-19-AR-16406491", "age": 49, "sex": "F", "zipCode": "721", "bmi": 43.85, "__v": 0, "examId": "Exam-1", "keyFindings": "Bilateral patchy airspace disease involving both mid and lower lung zones, left worse than the right.", "brixiaScores": "1,2,3,4", "imageURL": "https://ohif-hack-diversity-covid.s3.amazonaws.com/covid-png/COVID-19-AR-16406491_XR_CHEST_AP_PORTABLE_1.png" }, { "_id": "61e83d679dc59e6e8e11a1c6", "patientId": "COVID-19-AR-16439216", "age": 61, "sex": "F", "zipCode": "722", "bmi": 36, "__v": 0, "examId": "Exam-2", "keyFindings": "significant worsening of airspace disease, now very extensive and patchy sparing only apices.", "brixiaScores": "1,2,3,4", "imageURL": "https://ohif-hack-diversity-covid.s3.amazonaws.com/covid-png/COVID-19-AR-16439216_XR_CHEST_AP_PORTABLE_3.png" }, { "_id": "61e83d679dc59e6e8e11a1d2", "patientId": "COVID-19-AR-16406502", "age": 88, "sex": "F", "zipCode": "721", "bmi": 34.9, "__v": 0, "examId": "Exam-4", "keyFindings": "There are stable patchy airspace opacities throughout the bilateral lungs.", "brixiaScores": "1,2,3,4", "imageURL": "https://ohif-hack-diversity-covid.s3.amazonaws.com/covid-png/COVID-19-AR-16406502_XR_CHEST_AP_PORTABLE_5.png" }, { "_id": "61f8b913fec92e580dbc3ce7", "patientId": "COVID-457209", "age": 27, "sex": "M", "bmi": 43, "zipCode": "12731", "__v": 0, "examId": "Exam-990123", "keyFindings": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet suscipit, quo, vitae sapiente ex veritatis cupiditate aperiam culpa magni deleniti explicabo, rerum est consectetur pariatur! Itaque facere ducimus magni ex.", "brixiaScores": "1,2,3,4,5,6", "imageURL": "https://picsum.photos/200/200" }, { "_id": "61e83d679dc59e6e8e11a1c4", "patientId": "COVID-19-AR-16406513", "age": 44, "sex": "M", "zipCode": "722", "bmi": 32.3, "__v": 0, "examId": "Exam-3", "keyFindings": "Worsening diffuse airspace disease noted throughout the  lungs", "brixiaScores": "1,2,3,4", "imageURL": "https://ohif-hack-diversity-covid.s3.amazonaws.com/covid-png/COVID-19-AR-16406513_XR_CHEST_AP_PORTABLE_3.png" }, { "_id": "61e83d679dc59e6e8e11a1c9", "patientId": "COVID-19-AR-16406496", "age": 75, "sex": "F", "zipCode": "721", "bmi": 23.57, "__v": 0, "examId": "Exam-2", "keyFindings": "significant worsening of airspace disease, now very extensive and patchy sparing only apices.", "brixiaScores": "1,2,3,4", "imageURL": "https://ohif-hack-diversity-covid.s3.amazonaws.com/covid-png/COVID-19-AR-16406496_XR_CHEST_AP_ONLY_3.png" }, { "_id": "61e83d679dc59e6e8e11a1c8", "patientId": "COVID-19-AR-16406496", "age": 75, "sex": "F", "zipCode": "721", "bmi": 23.57, "__v": 0, "examId": "Exam-1", "keyFindings": "Bilateral patchy airspace disease involving both mid and lower lung zones, left worse than the right.", "brixiaScores": "1,2,3,4", "imageURL": "https://ohif-hack-diversity-covid.s3.amazonaws.com/covid-png/COVID-19-AR-16406496_XR_CHEST_AP_PORTABLE_1.png" }, { "_id": "61e83d679dc59e6e8e11a1cd", "patientId": "COVID-19-AR-16406504", "age": 39, "sex": "M", "zipCode": "722", "bmi": 33.5, "__v": 0, "examId": "Exam-1", "keyFindings": "Bilateral patchy airspace disease involving both mid and lower lung zones, left worse than the right.", "brixiaScores": "1,2,3,4", "imageURL": "https://ohif-hack-diversity-covid.s3.amazonaws.com/covid-png/COVID-19-AR-16406504_XR_CHEST_AP_PORTABLE_2.png" }, { "_id": "61e83d679dc59e6e8e11a1cf", "patientId": "COVID-19-AR-16434350", "age": 55, "sex": "F", "zipCode": "720", "bmi": 27.46, "__v": 0, "examId": "Exam-1", "keyFindings": "Bilateral patchy airspace disease involving both mid and lower lung zones, left worse than the right.", "brixiaScores": "1,2,3,4", "imageURL": "https://ohif-hack-diversity-covid.s3.amazonaws.com/covid-png/COVID-19-AR-16434350_XR_CHEST_AP_PORTABLE_1.png" }, { "_id": "61e83d679dc59e6e8e11a1d3", "patientId": "COVID-19-AR-16406502", "age": 88, "sex": "F", "zipCode": "721", "bmi": 34.9, "__v": 0, "examId": "Exam-6", "keyFindings": "Stable patchy opacities throughout both lungs", "brixiaScores": "1,2,3,4", "imageURL": "https://ohif-hack-diversity-covid.s3.amazonaws.com/covid-png/COVID-19-AR-16406502_XR_CHEST_AP_PORTABLE_5.png" }, { "_id": "61eeb632b9e71f0016fe0f4d", "patientId": "COVID-805187", "age": 66, "sex": "M", "bmi": 30, "zipCode": "27850", "__v": 0, "examId": "Exam-955770", "keyFindings": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet suscipit, quo, vitae sapiente ex veritatis cupiditate aperiam culpa magni deleniti explicabo, rerum est consectetur pariatur! Itaque facere ducimus magni ex.", "brixiaScores": "1,2,3,4,5,6", "imageURL": "https://picsum.photos/200/200" }, { "_id": "62059cba57da3edd1c049c17", "patientId": "COVID-728003", "age": 35, "sex": "M", "bmi": 49, "zipCode": "66225", "__v": 0, "examId": "Exam-311279", "keyFindings": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet suscipit, quo, vitae sapiente ex veritatis cupiditate aperiam culpa magni deleniti explicabo, rerum est consectetur pariatur! Itaque facere ducimus magni ex.", "brixiaScores": "1,2,3,4,5,6", "imageURL": "https://picsum.photos/200/200" }, { "_id": "63927c5da3b00c000e0885a8", "patientId": "COVID-780449", "age": 7, "sex": "M", "bmi": 34, "zipCode": "23482", "__v": 0, "examId": "Exam-132800", "keyFindings": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet suscipit, quo, vitae sapiente ex veritatis cupiditate aperiam culpa magni deleniti explicabo, rerum est consectetur pariatur! Itaque facere ducimus magni ex.", "brixiaScores": "1,2,3,4,5,6", "imageURL": "https://picsum.photos/200/200" }, { "_id": "63d860b622a1e4000e028c4a", "patientId": "COVID-381954", "age": 17, "sex": "M", "bmi": 81, "zipCode": "8584", "__v": 0, "examId": "Exam-248477", "keyFindings": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet suscipit, quo, vitae sapiente ex veritatis cupiditate aperiam culpa magni deleniti explicabo, rerum est consectetur pariatur! Itaque facere ducimus magni ex.", "brixiaScores": "1,2,3,4,5,6", "imageURL": "https://picsum.photos/200/200" }, { "_id": "63d988cb7f953f000e82aee1", "patientId": "COVID-680281", "age": 97, "sex": "M", "bmi": 82, "zipCode": "37110", "__v": 0, "examId": "Exam-537506", "keyFindings": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet suscipit, quo, vitae sapiente ex veritatis cupiditate aperiam culpa magni deleniti explicabo, rerum est consectetur pariatur! Itaque facere ducimus magni ex.", "brixiaScores": "1,2,3,4,5,6", "imageURL": "https://picsum.photos/200/200" }, { "_id": "63d988ea7f953f000e82b023", "patientId": "COVID-417230", "age": 52, "sex": "M", "bmi": 49, "zipCode": "46294", "__v": 0, "examId": "Exam-323490", "keyFindings": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet suscipit, quo, vitae sapiente ex veritatis cupiditate aperiam culpa magni deleniti explicabo, rerum est consectetur pariatur! Itaque facere ducimus magni ex.", "brixiaScores": "1,2,3,4,5,6", "imageURL": "https://picsum.photos/200/200" }, { "_id": "63da085697bef8000e088596", "patientId": "COVID-596302", "age": 52, "sex": "M", "bmi": 63, "zipCode": "62509", "__v": 0, "examId": "Exam-263450", "keyFindings": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet suscipit, quo, vitae sapiente ex veritatis cupiditate aperiam culpa magni deleniti explicabo, rerum est consectetur pariatur! Itaque facere ducimus magni ex.", "brixiaScores": "1,2,3,4,5,6", "imageURL": "https://picsum.photos/200/200" }, { "_id": "63da0e825af9a7000ec77362", "patientId": "COVID-133020", "age": 2, "sex": "M", "bmi": 20, "zipCode": "65026", "__v": 0, "examId": "Exam-622533", "keyFindings": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet suscipit, quo, vitae sapiente ex veritatis cupiditate aperiam culpa magni deleniti explicabo, rerum est consectetur pariatur! Itaque facere ducimus magni ex.", "brixiaScores": "1,2,3,4,5,6", "imageURL": "https://picsum.photos/200/200" }, { "_id": "63da0e895af9a7000ec77369", "patientId": "COVID-415311", "age": 20, "sex": "M", "bmi": 65, "zipCode": "24623", "__v": 0, "examId": "Exam-749288", "keyFindings": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet suscipit, quo, vitae sapiente ex veritatis cupiditate aperiam culpa magni deleniti explicabo, rerum est consectetur pariatur! Itaque facere ducimus magni ex.", "brixiaScores": "1,2,3,4,5,6", "imageURL": "https://picsum.photos/200/200" }, { "_id": "63da11f50c6acc000e28bd91", "patientId": "COVID-78418", "age": 18, "sex": "M", "bmi": 47, "zipCode": "85472", "__v": 0, "examId": "Exam-137289", "keyFindings": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet suscipit, quo, vitae sapiente ex veritatis cupiditate aperiam culpa magni deleniti explicabo, rerum est consectetur pariatur! Itaque facere ducimus magni ex.", "brixiaScores": "1,2,3,4,5,6", "imageURL": "https://picsum.photos/200/200" }, { "_id": "63dbde0c74d0ba000e020ab9", "patientId": "COVID-392788", "age": 55, "sex": "M", "bmi": 50, "zipCode": "64992", "__v": 0, "examId": "Exam-360258", "keyFindings": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet suscipit, quo, vitae sapiente ex veritatis cupiditate aperiam culpa magni deleniti explicabo, rerum est consectetur pariatur! Itaque facere ducimus magni ex.", "brixiaScores": "1,2,3,4,5,6", "imageURL": "https://picsum.photos/200/200" }]

async function main() {
    // const uri = "mongodb+srv://mmwaura:<password>@techdive3.nyaudnt.mongodb.net/?retryWrites=true&w=majority"
    const uri = "mongodb+srv://mmwaura:oQ37dOcQ6JojD11i@techdive3.nyaudnt.mongodb.net/?retryWrites=true&w=majority";
    const client = new MongoClient(uri);

    try {
        await client.connect();
        await listDatabases(client);

        // await createExam(client, newExam);
        // await createExams(client, exams);
        // await getByExam(client, exams[0]);
        await updateExam(client, { "patientId": "COVID-19-AR-16424081" }, { "age": 20, "sex": "M" });
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

main().catch(console.error)