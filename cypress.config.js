const { defineConfig } = require("cypress");
const webpack = require("@cypress/webpack-preprocessor");

async function setupNodeEvents(on, config) {
    on(
        "file:preprocessor",
        webpack({
            webpackOptions: {
                resolve: {
                    extensions: [".ts", ".js"],
                },
                module: {
                    rules: [
                        {
                            test: /\.feature$/,
                            use: [
                                {
                                    loader: '@cypress/cucumber-preprocessor/loader',
                                    options: {
                                        ...config
                                    },
                                },
                            ],
                        },
                        {
                            test: /\.cy\.js$/, // Processar arquivos .cy.js
                            use: [
                                {
                                    loader: "babel-loader",
                                    options: {
                                        presets: ["@babel/preset-env"],
                                    },
                                },
                            ],
                        },
                    ],
                },
            },
        })
    );

    return config;
}

module.exports = defineConfig({
    e2e: {
        baseUrl: "http://lojaebac.ebaconline.art.br",
        specPattern: '**/*.{feature,cy.js}', // Incluir .feature e .cy.js no specPattern
        setupNodeEvents: setupNodeEvents
    }
});
