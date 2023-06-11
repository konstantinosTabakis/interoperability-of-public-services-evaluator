import { db } from "./firebase.config";

import {
    collection,
    getDocs,
    // writeBatch,
    // getDoc,
    addDoc,
    // updateDoc,
    // deleteDoc,
    // doc,
    // setDoc,
    // getCountFromServer,
    serverTimestamp
} from "firebase/firestore";


export const getAllSurveys = async () => {
    const coll = collection(db, 'surveys');
    const querySnapshot = await getDocs(coll);

    const surveys = querySnapshot.docs.map((doc) => {
        const surveyData = doc.data()
        const surveyId = doc.id
        return { id: surveyId, ...surveyData }
    });
    return surveys;
}

export const createEvaluation = async (results) => {
    const coll = collection(db, 'evaluations');
    const created_at = await serverTimestamp()

    return await addDoc(coll, {...results, created_at});
}