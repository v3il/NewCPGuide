const config = require("../config");

const app = (require('express'))();

require("./boot/express")(app);
require("./boot/mongo")(app);

require("./controllers")(app);

app.listen(config.port, (error) => {
    if (error) {
        throw error;
    }

    console.log('Listening');
});

module.exports = app;
