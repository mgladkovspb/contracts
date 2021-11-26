const path = require("path")
const configure = require('./backend/configure')

module.exports = {
    filenameHashing: false,
    chainWebpack: config => { // для изменения пути к папке src
        config
            .entry("app")
            .clear()
            .add("./frontend/src/main.js")
            .end();
        config.resolve.alias
            .set("@", path.join(__dirname, "./frontend/src"))
    },
    devServer: {
        /* 
        Для корректной работы webpack devserver с api
        в запросах нужны следующие заголовки:
        Content-Type: application/json
        X-Requested-With: XMLHttpRequest
        */
        before: configure
    },
    publicPath:
        process.env.NODE_ENV === "production" ? "./" : "/",
}