const path = require("path")

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
    }
}