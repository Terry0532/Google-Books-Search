module.exports = {
    development: {
        username: process.env.development_username,
        password: process.env.development_password,
        database: process.env.development_database,
        host: process.env.development_host,
        port: 3306,
        dialect: "mysql"
    },
    test: {
        username: "root",
        password: null,
        database: "database_test",
        host: "127.0.0.1",
        port: 3306,
        dialect: "mysql"
    },
    production: {
        username: "rajskprln6ca2ug6",
        password: "ix6au5jcsevxs3fw",
        database: "dwt8imj5vycucjoc",
        host: "i5x1cqhq5xbqtv00.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
        port: 3306,
        dialect: "mysql"
    }
};