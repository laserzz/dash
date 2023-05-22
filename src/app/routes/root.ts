import { FastifyInstance } from 'fastify';

const route = async (fastify: FastifyInstance) => {
    fastify.get('/', async (request, reply) => {
        await reply.view('static/views/index.html');
    });
};

export default route;
