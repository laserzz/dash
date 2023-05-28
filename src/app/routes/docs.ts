import { FastifyInstance } from 'fastify';

const route = async (fastify: FastifyInstance) => {
    fastify.get('/docs', async (request, reply) => {
        await reply.view('static/views/docs.html');
    });
};

export default route;
