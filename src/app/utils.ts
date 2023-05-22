import { FastifyInstance } from 'fastify';
import fs from 'fs';
import path from 'path';

export const getRoutes = (fastify: FastifyInstance) => {
    const files = fs.readdirSync(path.join(__dirname, 'routes'));
    for (const f of files) {
        const fp = path.join(__dirname, `routes/${f}`);
        fastify.register(require(fp));
    }
};
