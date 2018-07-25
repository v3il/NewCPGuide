const Question = require("../models/Question");

module.exports = {
    async getRootQuestions() {

        // const a = await Question.find();
        //
        // a.forEach(async (q, i) => {
        //     const children = a.filter(qq => qq.parentId === q.id);
        //
        //     q.hasChildren = children.length > 0;
        //
        //     await q.save();
        // })


        return Question.find({
            parentId: {
                $eq: -1
            }
        });
    }
};
