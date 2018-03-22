import Vue from 'vue'
import Router from 'vue-router'

import QuestionsList from '@/components/QuestionsList';
import QuestionScreen from '@/components/QuestionScreen';

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'questions',
            component: QuestionsList,
        },
        {
            path: '/query/:query',
            name: 'filteredQuestions',
            component: QuestionsList,
        },
        {
            path: "/:qid/",
            name: 'questions-filtered',
            component: QuestionsList,
            children: [
                {
                    path: 'query/:query',
                    name: 'filteredQuestions',
                    component: QuestionsList,
                },
            ]
        },
        {
            path: '/q/:qid/',
            name: 'question',
            component: QuestionScreen
        }
    ],

    mode: "history"
})
