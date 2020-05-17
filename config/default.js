'use strict';
require('dotenv').config();
module.exports = {
    app: {
        name: "Workspace Microservice",
        baseUrl: `http://localhost:`,
        port: process.env.PORT || 3000
    },
    api: {
        prefix: '^/api/v[1-9]',
        version: [1],
    },
    database: {
        url: process.env.DB_URL || "mongodb://localhost/RUWorkSpaceDB",
    },
    token: {
        jwtKey: 'RUSecrect%2020',
        expiresIn: 3600
    }
};