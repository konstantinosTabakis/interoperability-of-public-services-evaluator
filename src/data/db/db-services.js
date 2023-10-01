import { db } from "./firebase.config";

import {
    collection,
    getDocs,
    // writeBatch,
    getDoc,
    addDoc,
    // updateDoc,
    // deleteDoc,
    doc,
    // setDoc,
    // getCountFromServer,
    serverTimestamp
} from "firebase/firestore";


// export const getAllSurveys = async () => {
//     const coll = collection(db, 'surveys_prod');
//     const querySnapshot = await getDocs(coll);

//     const surveys = querySnapshot.docs.map((doc) => {
//         const surveyData = doc.data()
//         const surveyId = doc.id
//         return { id: surveyId, ...surveyData }
//     });
//     return surveys;
// }
export const getAllSurveys = async () => {
    const coll = collection(db, 'surveys_prod');
    const querySnapshot = await getDocs(coll);

    const surveys = await Promise.all(querySnapshot.docs.map(async (surveyDoc) => {
        const surveyData = surveyDoc.data();
        const surveyId = surveyDoc.id;
        const questionIds = surveyData.questions;

        const questions = await Promise.all(questionIds.map(async (questionId) => {
            const questionRef = doc(db, 'questions_prod', questionId);
            const questionSnapshot = await getDoc(questionRef);
            const questionData = questionSnapshot.data();
            return { id: questionId, ...questionData };
        }));

        // console.log({ ...surveyData , id: surveyId, questions });

        return { ...surveyData, id: surveyId, questions };
    }));

    // console.log('All surveys:', surveys);

    return surveys;
}

export const createEvaluation = async (results) => {
    const coll = collection(db, 'evaluations_prod');
    const created_at = await serverTimestamp()

    return await addDoc(coll, { ...results, created_at });
}