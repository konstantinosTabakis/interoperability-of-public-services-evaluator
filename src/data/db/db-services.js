import { db } from "./firebase.config";

import {
    collection,
    getDocs,
    writeBatch,
    getDoc,
    addDoc,
    updateDoc,
    deleteDoc,
    doc,
    setDoc,
    getCountFromServer,
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