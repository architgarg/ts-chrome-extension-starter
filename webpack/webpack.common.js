const { join, resolve } = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    content_script: getSrcPath("content_script.ts"),
    background: getSrcPath("background.ts"),
    "views/options/options": getSrcPath("views/options/options.ts"),
    "views/popup/popup": getSrcPath("views/popup/popup.ts")
  },
  output: {
    path: getDistPath(""),
    filename: "[name].js"
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/
      },
      {
        test: /.css$|.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader",
          "postcss-loader"
        ]
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
    alias: {
      "@services": resolve(__dirname, "../src/services/")
    }
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        from: getSrcPath("assets"),
        to: getDistPath("assets")
      },
      {
        from: getSrcPath("manifest.json"),
        to: getDistPath("manifest.json")
      },
      {
        from: getSrcPath("views"),
        to: getDistPath("views"),
        ignore: ["*.ts", "*.scss"]
      }
    ]),
    new MiniCssExtractPlugin({
      filename: "[name].css"
    })
  ],
  stats: {
    children: false,
    entrypoints: false,
    warnings: true,
    modules: false,
    assetsSort: '!size'
  }
};

function getSrcPath(path) {
  return join(__dirname, "../src/" + path);
}

function getDistPath(path) {
  return join(__dirname, "../dist/" + path);
}
