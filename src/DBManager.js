import Vue from "vue";
import Vuex from "vuex";

import api from "./api";

Vue.use(Vuex);


export default new Vuex.Store({
    state: {
        allQuestions: [],
        selectedQuestion: null,
        editedQuestion: null,
    },

    getters: {
        allQuestions(state) {
            return state.allQuestions;
        },

        getById: state => (questionId) => {
            console.log(questionId, state.allQuestions)

            const filteredQuestions = [];

            filterArray(state.allQuestions);

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

            console.log(filteredQuestions[0]);

            return filteredQuestions[0];
        }
    },

    actions: {
        async loadQuestions({ commit }) {
            const response = await api.get("/questions/list");
            const questions = await response.data;

            console.log(questions.length)

            commit('SET', questions);


        },

        updateQuestions({ commit, state }) {
            console.log("Update", state)
            api.post("/", state.allQuestions);
        }
    },

    mutations: {
        SET(state, questions) {
            state.allQuestions = questions;
        },

        UPDATE(state) {

        }
    }
});
