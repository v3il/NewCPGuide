const questionsList = [
    {
		question: "Узнать побольше о начале работы с фронтом новой ПУ",
		answer: `Код новой ПУ находится в отдельном репозитории, который находится по адресу <textarea>/uCoz/www/src</textarea>
Для того, чтобы получить к нему доступ, нужно обратиться к админам, чтобы они добавили твой дев к 
фронтовому репозиторию. После этого надо в выше указанной директории необходимо создать корневую папку
проекта с любым именем: <textarea>~/uCoz/www/src> md panel</textarea> и после этого перейти в нее: 
<textarea>~/uCoz/www/src> cd panel</textarea>Дальше в эту папку необходимо вытянуть фронтовый мастер:
<textarea>~/uCoz/www/src/panel> git pull origin master</textarea>
Рабочая папка проекта находится в поддиректории v2. Перед началом работы необходимо установить зависимости
проекта: <textarea>~/uCoz/www/src/panel/v2> npm i</textarea>
После установки зависимостей можно приступать к работе. Для билда фронта используется webpack. Чтобы каждый раз 
не прописывать полный путь к webpack'у, было создано 2 скрипта:
<textarea>~/uCoz/www/src/panel/v2> npm run dev</textarea> - используется для билда фронта в дев режиме: без минификации, а также вешается watcher, что позволяет автоматизировать пересборку фронта при любых изменениях (пересобираться будет только файлы, которые изменили).
<textarea>~/uCoz/www/src/panel/v2> npm run prod</textarea> - используется для билда фронта в production режиме: код сжимается и становится готовым для пуша в альфу/бету.
Оба скрипта создают в папке <textarea>/uCoz/www/src/panel-v2</textarea> (эта папка доступна изначально) 3 основных файла фронта:
<textarea>admin.min.js</textarea> - файл собранных скриптов uCoz
<textarea>vendor.min.js</textarea> - файл собранных сторонних скриптов (библиотеки и т.д.)
<textarea>admin.min.css</textarea> - файл собранных стилей uCoz и библиотек. Также в папку panel-v2 копируются файлы 
используемых шрифтов и картинок. Причем, копируются только те файлы, которые непосрественно испотльзуются
в проекте.<br>
Когда задача сделана, переходим к выливке правок в альфу/бету для тестирования:<br>
Фронтовые правки необходимо запушить во фронтовую ветку, которая называется <b>alpha</b>
<textarea>~/uCoz/www/src/panel> git add . 
~/uCoz/www/src/panel> git commit -m "About task" 
~/uCoz/www/src/panel> git push origin YOUR_BRANCH
~/uCoz/www/src/panel> git checkout alpha
~/uCoz/www/src/panel> git pull origin alpha
~/uCoz/www/src/panel> git pull origin YOUR_BRANCH
~/uCoz/www/src/panel> git push origin alpha
</textarea>`,
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

module.exports = questionsList;