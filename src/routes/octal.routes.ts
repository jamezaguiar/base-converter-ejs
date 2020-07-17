import { Router } from 'express';

const octalRouter = Router();

octalRouter.get('/', (request, response) => {
  return response.render('oct');
});

export default octalRouter;
