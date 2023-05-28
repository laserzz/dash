"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const route = async (fastify) => {
    fastify.get('/docs', async (request, reply) => {
        await reply.view('static/views/docs.html');
    });
};
exports.default = route;
