import fastify, { FastifyInstance } from 'fastify';
import staticPlugin from '@fastify/static';
import path from 'path';
import { getRoutes } from './utils';
import view from '@fastify/view';
import ejs from 'ejs';

const app: FastifyInstance = fastify({
    logger: { transport: { target: 'pino-pretty' } },
});

app.register(staticPlugin, {
    root: path.join(__dirname, '../../../static'),
});

app.register(view, {
    engine: {
        ejs: ejs,
    },
});

getRoutes(app);

const start = async () => {
    try {
        await app.listen({ port: 3000 });
    } catch (err) {
        app.log.error(err);
        process.exit(1);
    }
};

start();
