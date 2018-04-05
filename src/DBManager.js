import db from "../db.js";


class DBManager {
    constructor() {
        this.questions = db.questions;
    }

    getQuestions() {
        return this.questions;
    }

    getQuestionById(questionId) {
        const filteredQuestions = [];

        filterArray(this.questions);

        function filterArray(array) {
            for(let i = 0; i < array.length; i++) {
                const questionData = array[i];

                if(questionData.childrenQuestions) {
                    filterArray(questionData.childrenQuestions);
                }

                if(questionData.id === +questionId) {
                    filteredQuestions.push(questionData);
                }
            }
        }

        console.log(filteredQuestions);

        return filteredQuestions[0];
    }
}


export default new DBManager();
