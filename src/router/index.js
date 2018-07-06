import Vue from 'vue'
import Router from 'vue-router'

import QuestionsList from '@/components/QuestionsList';
import QuestionScreen from '@/components/QuestionScreen';
import QuestionEditScreen from '@/components/QuestionEditScreen';

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'allQuestions',
            component: QuestionsList,
        },
        {
            path: "/:qid/",
            name: 'allQuestions-filtered',
            component: QuestionsList,
        },
        {
            path: '/q/:qid/',
            name: 'question',
            component: QuestionScreen
        },
        {
            path: "/edit/:qid/",
            name: 'edit-question',
            component: QuestionEditScreen,
        },
    ],

    mode: "history"
})
