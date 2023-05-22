"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRoutes = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const getRoutes = (fastify) => {
    const files = fs_1.default.readdirSync(path_1.default.join(__dirname, 'routes'));
    for (const f of files) {
        const fp = path_1.default.join(__dirname, `routes/${f}`);
        fastify.register(require(fp));
    }
};
exports.getRoutes = getRoutes;
