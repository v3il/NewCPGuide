const showdown  = require('showdown');

const converter = new showdown.Converter();

module.exports = (markdown) => {
    return converter.makeHtml(markdown);
};
