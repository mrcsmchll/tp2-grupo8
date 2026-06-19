const {env} = process

const SERVER_PORT = env.SERVER_PORT;
const X_API_KEY = env.X_API_KEY;
const DB_HOST = env.DB_DIALECT;
const DB_PORT = env.DB_PORT;
const DB_USER = env.DB_USER;
const DB_PASSWORD = env.DB_PASSWORD;
const DB_NAME = env.DB_NAME;
const DB_DIALECT = env.DB_DIALECT;

export {
    SERVER_PORT,
    X_API_KEY,
    DB_HOST,
    DB_PORT,
    DB_USER,
    DB_PASSWORD,
    DB_NAME,
    DB_DIALECT
}