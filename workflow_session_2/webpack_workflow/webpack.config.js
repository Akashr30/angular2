module.exports = {
    entry: "./script/app.ts",
    output: {
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.ts$/, loader: "ts-loader" }
        ]
    }
};
