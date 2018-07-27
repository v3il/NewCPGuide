import Vue from 'vue'
import Router from 'vue-router'

import QuestionsList from '@/components/QuestionsList';
import QuestionScreen from '@/components/QuestionScreen';
import QuestionEditScreen from '@/components/QuestionEditScreen';
import AuthPage from '@/components/AuthPage';

Vue.use(Router);

const router = new Router({
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
        {
            path: "/a/a",
            name: 'auth-page',
            component: AuthPage,
        },
    ],

    mode: "history"
});

export default router;
