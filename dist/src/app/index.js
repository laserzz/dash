"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const static_1 = __importDefault(require("@fastify/static"));
const path_1 = __importDefault(require("path"));
const utils_1 = require("./utils");
const view_1 = __importDefault(require("@fastify/view"));
const ejs_1 = __importDefault(require("ejs"));
const app = (0, fastify_1.default)({
    logger: { transport: { target: 'pino-pretty' } },
});
app.register(static_1.default, {
    root: path_1.default.join(__dirname, '../../../static'),
});
app.register(view_1.default, {
    engine: {
        ejs: ejs_1.default,
    },
});
(0, utils_1.getRoutes)(app);
const start = async () => {
    try {
        await app.listen({ port: 3000 });
    }
    catch (err) {
        app.log.error(err);
        process.exit(1);
    }
};
start();
