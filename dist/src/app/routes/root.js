"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const route = async (fastify) => {
    fastify.get('/', async (request, reply) => {
        await reply.view('static/views/index.html');
    });
};
exports.default = route;
