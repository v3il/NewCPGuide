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
            path: '/questions',
            name: 'allQuestions',
            component: QuestionsList,
        },
        {
            path: "/questions/:qid/",
            name: 'allQuestions-filtered',
            component: QuestionsList,
        },
        {
            path: '/question/:qid/',
            name: 'question',
            component: QuestionScreen
        },
        {
            path: "/edit/:qid/",
            name: 'edit-question',
            component: QuestionEditScreen,
        },
        {
            path: "/su",
            name: 'auth-page',
            component: AuthPage,
        },
        {
            path: "/",
            redirect: "/questions"
        },
        {
            path: "*",
            redirect: "/questions"
        }
    ],

    mode: "hash"
});

export default router;
