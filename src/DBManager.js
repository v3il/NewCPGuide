import db from "../db.js";

import Vue from "vue";
import Vuex from "vuex";

import api from "./api";

Vue.use(Vuex);


export default new Vuex.Store({
    state: {
        questions: []
    },
    getters: {
        questions(state) {
            return state.questions;
        },

        getById: state => questionId => {
            console.log(questionId)

            const filteredQuestions = [];

            filterArray(state.questions);

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

            return filteredQuestions[0];
        }
    },

    actions: {
        async loadQuestions({ commit }) {
            const response = await api().get();
            const questions = await response.data;

            console.log(questions.length)

            commit('SET', questions);


        },

        updateQuestions({ commit, state }) {
            console.log("Update", state)
            api().post("/", state.questions);
        }
    },

    mutations: {
        SET(state, questions) {
            state.questions = questions;
        },

        UPDATE(state) {

        }
    }
});
