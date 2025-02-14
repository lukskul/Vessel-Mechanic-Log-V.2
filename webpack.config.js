const path = require("path");

module.exports = {
    entry: "./App/js/index.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
    },
    mode: "production",
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"], // Handles CSS files
            },
        ],
    },
};
