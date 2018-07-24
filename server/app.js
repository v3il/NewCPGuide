const config = require("./config");

const app = (require('express'))();

require("./boot/express")(app);
require("./boot/mongo")(app);

app.listen(config.port, (error) => {
    if (error) {
        console.error(error);
        process.exit(1);
    }

    console.log('Listening');
});
