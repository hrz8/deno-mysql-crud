import { Router } from 'https://deno.land/x/oak@v5.0.0/mod.ts';
import authorController from '../src/services/author/controller.ts';

const router = new Router();

router
    // - authors
    .post('/api/authors', authorController.create)
    .get('/api/authors', authorController.list)
    .get('/api/authors/:id', authorController.get)
    .put('/api/authors/:id', authorController.update)
    .delete('/api/authors/:id', authorController.remove)

export default router;
