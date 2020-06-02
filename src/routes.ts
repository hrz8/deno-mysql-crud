import { Router } from '../deps.ts';
import authorController from '../src/services/author/controller.ts';
import publisherController from '../src/services/publisher/controller.ts';

const router = new Router();

router
  // - authors
  .post('/api/authors', authorController.create)
  .get('/api/authors', authorController.list)
  .get('/api/authors/:id', authorController.get)
  .put('/api/authors/:id', authorController.update)
  .delete('/api/authors/:id', authorController.remove)
  // - publishers
  .post('/api/publishers', publisherController.create)
  .get('/api/publishers', publisherController.list)
  .get('/api/publishers/:id', publisherController.get)
  .put('/api/publishers/:id', publisherController.update)
  .delete('/api/publishers/:id', publisherController.remove);

export default router;
