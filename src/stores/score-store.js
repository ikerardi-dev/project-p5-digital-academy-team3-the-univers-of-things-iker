import { computed, ref } from 'vue';
import { defineStore } from 'pinia';
import { db } from "@/firebase";
import { doc, getDoc, arrayUnion, setDoc } from "firebase/firestore";

export const useScoreStore = defineStore('score', () => {
    
    // Actions
    async function calculateScore (id, apiScore, scoredBy) {
        const docRef = doc(db, "scores", String(id));
        const docSnap = await getDoc(docRef);
        const itemUserScores = docSnap.data()?.scores;
        
        if (!docSnap.exists() || !itemUserScores) return apiScore;

        const scoredByTotal = itemUserScores.length + scoredBy;

        const scoresSum = itemUserScores.reduce(
            (acc, item) => {
                return acc + item;
            }, 
            apiScore * scoredBy
        );

        const combinedScore = scoresSum / scoredByTotal;
        
        const result = Math.trunc(combinedScore * 100) / 100;

        return result;
    }

    async function addScore (id, scoreVAlue) {
        if (!id || !scoreVAlue) return
        
        scoreVAlue = Number(scoreVAlue);

        const docRef = doc(db, "scores", String(id));
        await setDoc(docRef,
            { scores: arrayUnion(scoreVAlue)},
            { merge: true }
        )
    }
    
    return {calculateScore, addScore}

});







