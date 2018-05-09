const questionsList = [
    {
		question: "Узнать побольше о начале работы с фронтом новой ПУ",
		answer: "(~ test test1 ~) test test test test test test test test [= <div>console.log(123)</div> =] [= <div>console.log(12344)</div> =]"
    },
	{
		question: "Добавить скрипт к новой странице",
		answer: "Answer"
	},
	{
		question: "Создать адаптивную таблицу",
		answer: "Answer"
	},
	{
		question: "Скрыть кнопки топ-бара",
		answer: "Answer"
	},
	{
		question: "Добавить нижнюю панель к странице",
		answer: "Answer"
	},
	{
		question: "Добавить звёздочку добавления в закладки странице",
		answer: "Answer"
	},
	{
		question: "Послать форму на сервер",
		answer: "Answer"
	},
	{
		question: "Скрыть текущее уведомление",
		answer: "Answer"
	},
	{
		question: "Сделать навигацию на страницу",
		answer: "Answer"
	},
	{
		question: "Создать фронтовый сайн",
		answer: "Answer"
	},
	{
		question: "Выделить текст элемента при клике по нему",
		answer: "Answer"
	},
	{
		question: "Создать поповер с контентом",
		answer: "Answer"
	},
	{
		question: "Создать группу чекбоксов",
		answer: "Answer"
	},
	{
		question: "Инициализировать загрузчик файлов",
		answer: "Answer"
	},
	{
		question: "Подключить стили к странице",
		answer: "Answer"
	},
	{
		question: "Показать модалку материала",
		answer: "Answer",
        childrenQuestions: [
            {
                question: "Показать модалку материала. Добавление",
                answer: "Answer",
            },
            {
                question: "Показать модалку материала. Редактирование",
                answer: "Answer",
            },
        ]
	},

	{
		question: "Показать уведомление",
		answer: "Answer",
		childrenQuestions: [
            {
                question: "Показать уведомление. Успех",
                answer: "Answer",
            },
            {
                question: "Показать уведомление. Ошибка",
                answer: "Answer",
            },
            {
                question: "Показать уведомление. Пожалуйста, подождите",
                answer: "Answer",
            },
        ]
	},

	{
		question: "Вызвать диалог с контентом",
		answer: "Answer",
		childrenQuestions: [
            {
                question: "Вызвать диалог с контентом. Диалог подтвеждения",
                answer: "Answer",
            },
            {
                question: "Вызвать диалог с контентом. Информативный диалог",
                answer: "Answer",
            },
            {
                question: "Вызвать диалог с контентом. Диалог со сложным контентом",
                answer: "Answer",
            },
        ]
	},

	{
		question: "Зарегистрировать кнопку верхней панели",
		answer: "Answer",
		childrenQuestions: [
            {
                question: "Зарегистрировать кнопку верхней панели. Основная (зелёная)",
                answer: "Answer",
            },
            {
                question: "Зарегистрировать кнопку верхней панели. Второстепенная",
                answer: "Answer",
            },
            {
                question: "Зарегистрировать кнопку верхней панели. Редактирования материала",
                answer: "Answer",
            },
            {
                question: "Зарегистрировать кнопку верхней панели. Удаления материала",
                answer: "Answer",
            },
        ]
	},

	{
		question: "Зарегистрировать кнопку нижней панели",
		answer: "Answer",
		childrenQuestions: [
            {
                question: "Зарегистрировать кнопку верхней панели. Левая",
                answer: "Answer",
            },
            {
                question: "Зарегистрировать кнопку верхней панели. Правая",
                answer: "Answer",
            },
        ]
	},
];

let id = 0;

questionsList.forEach((questionData, index) => {
    const currentQuestionId = index + 1;

	questionData.id = id++;

    (questionData.childrenQuestions || []).forEach((childQuestion, i) => {
        childQuestion.id = id++;
    })

	// if(questionData.childrenQuestions) {
	// 	const subQuestionsIds = [];
	// 	const childrenQuestionsCount = questionData.childrenQuestions.match(/next (.*)/)[1];
    //
	// 	for(let i = 1; i <= childrenQuestionsCount; i++) {
	// 		subQuestionsIds.push(currentQuestionId + i);
	// 	}
    //
	// 	questionData.subQuestions = subQuestionsIds;
	// 	subQuestionsIds.forEach(subQuestionsId => questionsList[subQuestionsId - 1].child = true);
	// }
});

// console.log(questionsList)

export default {questions: questionsList};
